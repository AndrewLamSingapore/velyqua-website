import { expect, test } from '@playwright/test';

test('homepage stays usable when WebGL initialization fails', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = new Proxy(original, {
      apply(target, canvas, args) {
        if (args[0].includes('webgl')) {
          document.documentElement.dataset.webglDenied = 'true';
          return null;
        }
        return Reflect.apply(target, canvas, args);
      },
    });
  });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-webgl-denied', 'true');
  await expect(page.locator('#aqua-now h2')).toBeVisible();
  const openApp = page.locator('footer').getByRole('link', { name: 'Open VELYQUA' });
  await expect(openApp).toBeVisible();
  await expect(openApp).toHaveAttribute('href', /https:\/\/(velyqua\.vercel\.app|app\.velyqua\.com)/);
  expect(errors).toEqual([]);
});
