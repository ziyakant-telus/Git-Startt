const { test, expect } = require('@playwright/test');

test.describe('Profile Page UI Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/profile');
    });

    // TC01 - Verify Profile page loads successfully
    test('TC01 - Verify Profile page loads successfully', async ({ page }) => {
        await expect(page).toHaveURL(/.*\/profile/);
    });

    // TC02 - Verify Willow Blogs logo is visible
    test('TC02 - Verify Willow Blogs logo is visible', async ({ page }) => {
        await expect(page.getByText('Willow Blogs')).toBeVisible();
    });

    // TC03 - Verify navigation menu is displayed
    test('TC03 - Verify navigation menu is displayed', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Blogs' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Create Blog' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible();
    });

    // TC04 - Verify page heading
    test('TC04 - Verify My Profile heading', async ({ page }) => {
        await expect(page.getByText('My Profile')).toBeVisible();
    });

    // TC05 - Verify page subtitle
    test('TC05 - Verify page subtitle', async ({ page }) => {
        await expect(
            page.getByText('Manage your account settings')
        ).toBeVisible();
    });

    // TC06 - Verify failed profile message
    test('TC06 - Verify failed profile message', async ({ page }) => {
        await expect(
            page.getByText('Failed to load profile.')
        ).toBeVisible();
    });

    // TC07 - Verify Home navigation
    test('TC07 - Verify Home navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveURL('http://localhost:3000/');
    });

    // TC08 - Verify Blogs navigation
    test('TC08 - Verify Blogs navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Blogs' }).click();
        await expect(page).toHaveURL(/.*\/blogs/);
    });

    // TC09 - Verify Create Blog navigation
    test('TC09 - Verify Create Blog navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Create Blog' }).click();
        await expect(page).toHaveURL(/.*\/create-blog/);
    });

    // TC10 - Verify Profile navigation
    test('TC10 - Verify Profile navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Profile' }).click();
        await expect(page).toHaveURL(/.*\/profile/);
    });

    // TC11 - Verify footer
    test('TC11 - Verify footer is visible', async ({ page }) => {
        await expect(
            page.getByText('© 2026 Willow Blog App')
        ).toBeVisible();
    });

    // TC12 - Verify page has no editable fields
    test('TC12 - Verify no input fields are present', async ({ page }) => {
        await expect(page.locator('input')).toHaveCount(0);
        await expect(page.locator('textarea')).toHaveCount(0);
    });

});