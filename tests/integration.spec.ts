import { test, expect } from '@playwright/test';
import { site } from '../lib/site';

test.describe('Unified navigation (integration)', () => {
  test('marketing links to the AI platform', async ({ page }) => {
    await page.goto('/');
    const open = page.locator('a', { hasText: 'Open VELYQUA' }).first();
    await expect(open).toHaveAttribute('href', site.appUrl);
  });

  test('AI platform returns to marketing', async ({ page }) => {
    test.setTimeout(90000);
    await page.goto(`${site.appUrl}/`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(5000);
    await expect(page.getByText('VELYQUA home', { exact: false }).first()).toBeAttached();
  });
});
