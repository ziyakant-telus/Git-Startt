const { test, expect } = require('@playwright/test');

test.describe('Amazon login page', () => {
  const signInUrl = 'https://www.amazon.com/ap/signin';

  test.beforeEach(async ({ page }) => {
    await page.goto(signInUrl);
    await expect(page).toHaveURL(/amazon\.com\/ap\/signin/);
  });

  test('loads sign-in form with email input', async ({ page }) => {
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.getByRole('button', { name: /continue/i })).toBeVisible();
  });

  test('shows an error when email is blank', async ({ page }) => {
    await page.click('button#continue, input#continue, button[name="continue"], input[name="continue"]');
    await expect(page.getByText(/enter your email or mobile phone number/i)).toBeVisible();
  });

  test('advances to password entry when a valid email is entered', async ({ page }) => {
    await page.fill('input[name="email"]', 'test@example.com');
    await page.click('button#continue, input#continue, button[name="continue"], input[name="continue"]');
    await expect(page.locator('input[name="password"], input#ap_password')).toBeVisible();
  });

  test('displays password page controls after continue', async ({ page }) => {
    await page.fill('input[name="email"]', 'test@example.com');
    await page.click('button#continue, input#continue, button[name="continue"], input[name="continue"]');
    await expect(page.getByRole('link', { name: /forgot your password/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /sign-in/i })).toBeVisible();
  });
});
