import { expect, test } from '@playwright/test';

test('Navigate and check page content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('homePageLink')).toBeVisible();
  await expect(page.getByTestId('portfolioPageLink')).toBeVisible();
  await expect(page.getByTestId('contactPageLink')).toBeVisible();
  await expect(page.getByTestId('pageTitle')).not.toBeEmpty();

  await page.getByTestId('aboutPageLink').click();
  await page.waitForURL('/about');
  await expect(page).toHaveTitle('About');
  await expect(page.getByTestId('pageTitle')).toHaveText('About');

  await page.getByTestId('portfolioPageLink').click();
  await page.waitForURL('/portfolio');
  await expect(page).toHaveTitle('Portfolio');
  await expect(page.getByTestId('pageTitle')).toHaveText('Portfolio');

  await page.getByTestId('contactPageLink').click();
  await page.waitForURL('/contact');
  await expect(page).toHaveTitle('Contact');
  await expect(page.getByTestId('pageTitle')).toHaveText('Contact');
});
