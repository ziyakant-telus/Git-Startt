const { test, expect } = require('@playwright/test');

test.describe('Blogs Page UI Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/blogs');
    });

    // TC01 - Verify Blogs page loads successfully
    test('TC01 - Verify Blogs page loads successfully', async ({ page }) => {
        await expect(page).toHaveURL(/.*\/blogs/);
    });

    // TC02 - Verify navigation bar is visible
    test('TC02 - Verify navigation bar is visible', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Blogs' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Create Blog' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible();
    });

    // TC03 - Verify Explore Articles heading
    test('TC03 - Verify Explore Articles heading', async ({ page }) => {
        await expect(page.getByText('Explore Articles')).toBeVisible();
    });

    // TC04 - Verify page description
    test('TC04 - Verify page description', async ({ page }) => {
        await expect(
            page.getByText('Thoughts, tutorials, and insights from our community.')
        ).toBeVisible();
    });

    // TC05 - Verify Write Article button
    test('TC05 - Verify Write Article button is visible', async ({ page }) => {
        const writeArticle = page.getByRole('link', {
            name: /Write Article/i
        });

        await expect(writeArticle).toBeVisible();
        await expect(writeArticle).toBeEnabled();
    });

    // TC06 - Verify No Articles message
    test('TC06 - Verify No articles message', async ({ page }) => {
        await expect(page.getByText('No articles yet')).toBeVisible();
    });

    // TC07 - Verify Empty state description
    test('TC07 - Verify Empty state description', async ({ page }) => {
        await expect(
            page.getByText('Be the first to share something with the world.')
        ).toBeVisible();
    });

    // TC08 - Verify Create Your First Post button
    test('TC08 - Verify Create Your First Post button', async ({ page }) => {
        const firstPost = page.getByRole('link', {
            name: 'Create Your First Post'
        });

        await expect(firstPost).toBeVisible();
        await expect(firstPost).toBeEnabled();
    });

    // TC09 - Verify Write Article redirects to Create Blog page
    test('TC09 - Verify Write Article button navigation', async ({ page }) => {
        await page.getByRole('link', {
            name: /Write Article/i
        }).click();
        await expect(page).toHaveURL(/.*\/create-blog/);
    });

    // TC10 - Verify Create Your First Post redirects to Create Blog page
    test('TC10 - Verify Create Your First Post button navigation', async ({ page }) => {
        await page.getByRole('link', {
            name: 'Create Your First Post'
        }).click();

        await expect(page).toHaveURL(/.*\/create-blog/);
    });

    // TC11 - Verify Home navigation
    test('TC11 - Verify Home navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Home' }).click();

        await expect(page).toHaveURL('http://localhost:3000/');
    });

    // TC12 - Verify Create Blog navigation
    test('TC12 - Verify Create Blog navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Create Blog' }).click();

        await expect(page).toHaveURL(/.*\/create-blog/);
    });

    // TC13 - Verify Profile navigation
    test('TC13 - Verify Profile navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Profile' }).click();

        await expect(page).toHaveURL(/.*\/profile/);
    });

    // TC14 - Verify Blogs navigation
    test('TC14 - Verify Blogs navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Blogs' }).click();

        await expect(page).toHaveURL(/.*\/blogs/);
    });

});