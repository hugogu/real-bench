import { expect, test } from '@playwright/test';

test('@smoke loads the API document and visible reference content', async ({ page }) => {
  const response = await page.request.get('/api/openapi.json');
  expect(response.status()).toBe(200);
  expect((await response.json()).openapi).toBe('3.1.0');

  await page.goto('/api-docs', { waitUntil: 'networkidle' });

  await expect(page.locator('.scalar-api-reference').first()).toBeVisible();
  await expect(page.getByText('Real Bench API').first()).toBeVisible();
  await expect(page.getByText('Authentication').first()).toBeVisible();
});

test('uses the full viewport and preserves the reference two-column layout', async ({ page }) => {
  await page.goto('/api-docs', { waitUntil: 'networkidle' });

  await expect(page.getByTestId('host-app-header')).toHaveCount(0);

  const frameBox = await page.getByTestId('api-docs-frame').boundingBox();
  const viewport = page.viewportSize();
  expect(frameBox).not.toBeNull();
  expect(viewport).not.toBeNull();
  expect(frameBox!.x).toBe(0);
  expect(frameBox!.y).toBe(0);
  expect(frameBox!.width).toBe(viewport!.width);
  expect(frameBox!.height).toBe(viewport!.height);

  const sidebar = page.getByRole('navigation', { name: 'Sidebar for Real Bench API' });
  const content = page.getByRole('main', {
    name: 'Open API Documentation for Real Bench API',
  });

  await expect(sidebar).toBeVisible();
  await expect(content).toBeVisible();

  const sidebarBox = await sidebar.boundingBox();
  const contentBox = await content.boundingBox();

  expect(sidebarBox).not.toBeNull();
  expect(contentBox).not.toBeNull();
  expect(sidebarBox!.width).toBeGreaterThan(200);
  expect(contentBox!.x).toBeGreaterThanOrEqual(
    sidebarBox!.x + sidebarBox!.width - 1,
  );
});
