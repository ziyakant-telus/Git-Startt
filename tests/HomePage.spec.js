const { test, expect } = require('@playwright/test');

test.describe('Home Page UI Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/');
    });

    // TC01 - Verify Home page loads successfully
    test('TC01 - Verify homepage loads successfully', async ({ page }) => {
        await expect(page).toHaveURL('http://localhost:3000/');
        await expect(page).toHaveTitle(/Create Next App/i);
    });

    // TC02 - Verify Willow Blogs logo is visible
    test('TC02 - Verify Willow Blogs logo is visible', async ({ page }) => {
        await expect(page.getByText('Willow Blogs')).toBeVisible();
    });

    // TC03 - Verify navigation menu is displayed
    test('TC03 - Verify navigation menu items are visible', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Blogs' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Create Blog' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible();
    });

    // TC04 - Verify Hero Section
    test('TC04 - Verify Hero Section content', async ({ page }) => {
        await expect(page.getByText('Discover Amazing Blogs')).toBeVisible();
        await expect(page.getByText('Read, Create and Share Blogs')).toBeVisible();
    });

    // TC05 - Verify Explore Blogs button
    test('TC05 - Verify Explore Blogs button is visible and enabled', async ({ page }) => {
        const exploreButton = page.getByRole('button', { name: 'Explore Blogs' });

        await expect(exploreButton).toBeVisible();
        await expect(exploreButton).toBeEnabled();
    });

    // TC06 - Verify Explore Blogs button navigation
    test('TC06 - Verify Explore Blogs button redirects to Blogs page', async ({ page }) => {
        await page.getByRole('button', { name: 'Explore Blogs' }).click();

        await expect(page).toHaveURL(/.*\/blogs/);
    });

    // TC07 - Verify Home navigation
    test('TC07 - Verify Home menu keeps user on homepage', async ({ page }) => {
        await page.getByRole('link', { name: 'Home' }).click();

        await expect(page).toHaveURL('http://localhost:3000/');
    });

    // TC08 - Verify Latest Blogs section is visible
    test('TC08 - Verify Latest Blogs section is visible', async ({ page }) => {
        await expect(page.getByText('Latest Blogs')).toBeVisible();
    });

    // TC09 - Verify footer is displayed
    test('TC09 - Verify footer is visible', async ({ page }) => {
        await expect(page.getByText('© 2026 Willow Blog App')).toBeVisible();
    });

    // TC10 - Verify navigation links are clickable
    test('TC10 - Verify all navigation links are enabled', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Home' })).toBeEnabled();
        await expect(page.getByRole('link', { name: 'Blogs' })).toBeEnabled();
        await expect(page.getByRole('link', { name: 'Create Blog' })).toBeEnabled();
        await expect(page.getByRole('link', { name: 'Profile' })).toBeEnabled();
    });

});