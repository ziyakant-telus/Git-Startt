const { test, expect } = require('@playwright/test');

test.describe('Navigation Bar Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
    });

    // TC01 - Verify navigation menu is displayed
    test('TC01 - Verify all navigation links are visible', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Blogs' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Create Blog' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible();
    });

    // TC02 - Verify Home navigation
    test('TC02 - Verify Home navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveURL('http://localhost:3000/');
    });

    // TC03 - Verify Blogs navigation
    test('TC03 - Verify Blogs navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Blogs' }).click();
        await expect(page).toHaveURL(/.*\/blogs/);
        await expect(page.getByText('Explore Articles')).toBeVisible();
    });

    // TC04 - Verify Create Blog navigation
    test('TC04 - Verify Create Blog navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Create Blog' }).click();
        await expect(page).toHaveURL(/.*\/create-blog/);
        await expect(page.getByText('Create a new blog')).toBeVisible();
    });

    // TC05 - Verify Profile navigation
    test('TC05 - Verify Profile navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Profile' }).click();
        await expect(page).toHaveURL(/.*\/profile/);
        await expect(page.getByText('My Profile')).toBeVisible();
    });

    // TC06 - Verify Blogs -> Home navigation
    test('TC06 - Verify Blogs to Home navigation', async ({ page }) => {
        await page.goto('http://localhost:3000/blogs');
        await page.getByRole('link', { name: 'Home' }).click();

        await expect(page).toHaveURL('http://localhost:3000/');
    });

    // TC07 - Verify Create Blog -> Blogs navigation
    test('TC07 - Verify Create Blog to Blogs navigation', async ({ page }) => {
        await page.goto('http://localhost:3000/create-blog');
        await page.getByRole('link', { name: 'Blogs' }).click();

        await expect(page).toHaveURL(/.*\/blogs/);
    });

    // TC08 - Verify Profile -> Home navigation
    test('TC08 - Verify Profile to Home navigation', async ({ page }) => {
        await page.goto('http://localhost:3000/profile');
        await page.getByRole('link', { name: 'Home' }).click();

        await expect(page).toHaveURL('http://localhost:3000/');
    });

    // TC09 - Verify logo redirects to Home page
    test('TC09 - Verify Willow Blogs logo redirects to Home', async ({ page }) => {
        await page.goto('http://localhost:3000/blogs');

        await page.getByText('Willow Blogs').click();

        await expect(page).toHaveURL('http://localhost:3000/');
    });

    // TC10 - Verify navigation links are enabled
    test('TC10 - Verify all navigation links are enabled', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Home' })).toBeEnabled();
        await expect(page.getByRole('link', { name: 'Blogs' })).toBeEnabled();
        await expect(page.getByRole('link', { name: 'Create Blog' })).toBeEnabled();
        await expect(page.getByRole('link', { name: 'Profile' })).toBeEnabled();
    });

});