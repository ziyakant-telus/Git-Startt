const { test, expect } = require('@playwright/test');

const pages = [
    '/',
    '/blogs',
    '/create-blog',
    '/profile'
];

test.describe('Common UI Verification Tests', () => {

    // TC01 - Verify pages load successfully
    test('TC01 - Verify all pages load successfully', async ({ page }) => {
        for (const url of pages) {
            await page.goto(`http://localhost:3000${url}`);
            await expect(page).toHaveURL(`http://localhost:3000${url}`);
        }
    });

    // TC02 - Verify navigation bar is visible on all pages
    test('TC02 - Verify navigation bar is visible on all pages', async ({ page }) => {
        for (const url of pages) {
            await page.goto(`http://localhost:3000${url}`);

            await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Blogs' })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Create Blog' })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible();
        }
    });

    // TC03 - Verify Willow Blogs logo is visible
    test('TC03 - Verify Willow Blogs logo is visible on all pages', async ({ page }) => {
        for (const url of pages) {
            await page.goto(`http://localhost:3000${url}`);
            await expect(page.getByText('Willow Blogs')).toBeVisible();
        }
    });

    // TC04 - Verify footer is displayed
    test('TC04 - Verify footer is visible on all pages', async ({ page }) => {
        for (const url of pages) {
            await page.goto(`http://localhost:3000${url}`);
            await expect(page.getByText('© 2026 Willow Blog App')).toBeVisible();
        }
    });

    // TC05 - Verify all navigation links are enabled
    test('TC05 - Verify navigation links are enabled', async ({ page }) => {
        for (const url of pages) {
            await page.goto(`http://localhost:3000${url}`);

            await expect(page.getByRole('link', { name: 'Home' })).toBeEnabled();
            await expect(page.getByRole('link', { name: 'Blogs' })).toBeEnabled();
            await expect(page.getByRole('link', { name: 'Create Blog' })).toBeEnabled();
            await expect(page.getByRole('link', { name: 'Profile' })).toBeEnabled();
        }
    });

    // TC06 - Verify page has no broken images
    test('TC06 - Verify images are loaded successfully', async ({ page }) => {
        for (const url of pages) {
            await page.goto(`http://localhost:3000${url}`);

            const images = page.locator('img');
            const count = await images.count();

            for (let i = 0; i < count; i++) {
                await expect(images.nth(i)).toBeVisible();
            }
        }
    });

    // TC07 - Verify all buttons are enabled
    test('TC07 - Verify all visible buttons are enabled', async ({ page }) => {

        const targetPages = ['/', '/blogs', '/create-blog'];

        for (const url of targetPages) {

            await page.goto(`http://localhost:3000${url}`);

            const buttons = page.locator('button');
            const count = await buttons.count();

            for (let i = 0; i < count; i++) {
                await expect(buttons.nth(i)).toBeEnabled();
            }
        }
    });

    // TC08 - Verify all input fields are editable
    test('TC08 - Verify input fields are editable', async ({ page }) => {

        await page.goto('http://localhost:3000/create-blog');

        const inputs = page.locator('input');

        const count = await inputs.count();

        for (let i = 0; i < count; i++) {
            await expect(inputs.nth(i)).toBeEditable();
        }

        await expect(page.locator('textarea')).toBeEditable();
    });

    // TC09 - Verify vertical scrolling works
    test('TC09 - Verify page scrolling', async ({ page }) => {

        await page.goto('http://localhost:3000/');

        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        await expect(page.getByText('© 2026 Willow Blog App')).toBeVisible();
    });

    // TC10 - Verify browser Back and Forward navigation
    test('TC10 - Verify browser Back and Forward functionality', async ({ page }) => {

        await page.goto('http://localhost:3000/');

        await page.goto('http://localhost:3000/blogs');

        await page.goBack();

        await expect(page).toHaveURL('http://localhost:3000/');

        await page.goForward();

        await expect(page).toHaveURL(/.*\/blogs/);
    });

});