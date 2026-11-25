import { test, expect } from '@playwright/test';

test.describe('VELYQUA unified marketing site', () => {
  test('loads with correct metadata, single h1 and all sections', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text());
    });
    page.on('pageerror', (e) => errors.push(String(e)));

    await page.goto('/');
    await expect(page).toHaveTitle(/VELYQUA/);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);

    for (const href of ['#how', '#aqua-now', '#vision', '#architecture', '#showcase', '#research']) {
      await expect(page.locator(`a[href="${href}"]`).first()).toBeAttached();
    }
    for (const id of ['how', 'aqua-now', 'vision', 'architecture', 'twin', 'showcase', 'research']) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }

    const open = page.locator('a', { hasText: 'Open VELYQUA' }).first();
    await expect(open).toHaveAttribute('href', /https:\/\/(velyqua\.vercel\.app|app\.velyqua\.com)/);

    await page.waitForTimeout(1200);
    const onVercel = /vercel\.app/.test(new URL(page.url()).hostname);
    const tolerated = (t: string) =>
      /\/_vercel\/(insights|speed-insights)\/script\.js/.test(t) ||
      (!onVercel && t === 'Failed to load resource: the server responded with a status of 404 (Not Found)');
    expect(errors.filter((t) => !tolerated(t))).toEqual([]);
  });

  test('has no horizontal overflow', async ({ page }) => {
    await page.goto('/');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test('exposes SEO and social metadata', async ({ page }) => {
    await page.goto('/');
    for (const sel of [
      'meta[property="og:title"]',
      'meta[property="og:image"]',
      'meta[name="twitter:card"]',
      'link[rel="canonical"]',
      'script[type="application/ld+json"]',
    ]) {
      await expect(page.locator(sel)).toHaveCount(1);
    }
  });

  test('robots.txt and sitemap.xml resolve', async ({ request }) => {
    expect((await request.get('/robots.txt')).ok()).toBeTruthy();
    expect((await request.get('/sitemap.xml')).ok()).toBeTruthy();
  });

  test('navigation links target the app correctly', async ({ page }) => {
    await page.goto('/');
    const link = page.locator('a', { hasText: 'Follow the build' });
    await expect(link).toHaveAttribute('href', /github\.com/);
  });
});
