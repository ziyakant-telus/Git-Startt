import { test, expect } from '@playwright/test';

test.describe('UI Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/');
  });

  test('All the basic functionality should work as expected', async ({ page }) => {

    // Go to Practice page
    await page.locator('a[href="https://practicetestautomation.com/practice/"]').click();

    // Click Home
    await page.getByRole('link', { name: 'Home' }).click();

    // Verify URL
    await expect(page).toHaveURL('https://practicetestautomation.com/');

    // Verify title
    await expect(page).toHaveTitle(/Practice Test Automation/);
  });

});