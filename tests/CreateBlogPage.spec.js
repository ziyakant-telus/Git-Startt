const { test, expect } = require('@playwright/test');

test.describe('Create Blog Page UI Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/create-blog');
    });

    // TC01 - Verify Create Blog page loads
    test('TC01 - Verify Create Blog page loads successfully', async ({ page }) => {
        await expect(page).toHaveURL(/.*\/create-blog/);
    });

    // TC02 - Verify page heading
    test('TC02 - Verify Create Blog heading', async ({ page }) => {
        await expect(page.getByText('Create a new blog')).toBeVisible();
    });

    // TC03 - Verify page description
    test('TC03 - Verify page description', async ({ page }) => {
        await expect(
            page.getByText('Share your thoughts, stories, and ideas with the world.')
        ).toBeVisible();
    });

    // TC04 - Verify Blog Title textbox
    test('TC04 - Verify Blog Title field', async ({ page }) => {
        const title = page.getByPlaceholder('Enter a compelling title...');
        await expect(title).toBeVisible();
        await expect(title).toBeEditable();
    });

    // TC05 - Verify Short Description textbox
    test('TC05 - Verify Short Description field', async ({ page }) => {
        const description = page.getByPlaceholder('A brief summary of your blog post...');
        await expect(description).toBeVisible();
        await expect(description).toBeEditable();
    });

    // TC06 - Verify Author Name textbox
    test('TC06 - Verify Author Name field', async ({ page }) => {
        const author = page.getByPlaceholder('Your name or pen name...');
        await expect(author).toBeVisible();
        await expect(author).toBeEditable();
    });

    // TC07 - Verify Cover Image URL textbox
    test('TC07 - Verify Cover Image URL field', async ({ page }) => {
        const image = page.getByPlaceholder('https://example.com/image.jpg');
        await expect(image).toBeVisible();
        await expect(image).toBeEditable();
    });

    // TC08 - Verify Blog Content textarea
    test('TC08 - Verify Blog Content field', async ({ page }) => {
        const content = page.locator('textarea');
        await expect(content).toBeVisible();
        await expect(content).toBeEditable();
    });

    // TC09 - Verify Publish Blog button
    test('TC09 - Verify Publish Blog button', async ({ page }) => {
        const publish = page.getByRole('button', { name: 'Publish Blog' });
        await expect(publish).toBeVisible();
        await expect(publish).toBeEnabled();
    });

    // TC10 - Verify Cancel button
    test('TC10 - Verify Cancel button', async ({ page }) => {
        const cancel = page.getByRole('button', { name: 'Cancel' });
        await expect(cancel).toBeVisible();
        await expect(cancel).toBeEnabled();
    });

    // TC11 - Verify user can enter Blog Title
    test('TC11 - Verify Blog Title accepts input', async ({ page }) => {
        const title = page.getByPlaceholder('Enter a compelling title...');
        await title.fill('Playwright Testing');
        await expect(title).toHaveValue('Playwright Testing');
    });

    // TC12 - Verify user can enter Short Description
    test('TC12 - Verify Short Description accepts input', async ({ page }) => {
        const description = page.getByPlaceholder('A brief summary of your blog post...');
        await description.fill('This is a sample description.');
        await expect(description).toHaveValue('This is a sample description.');
    });

    // TC13 - Verify user can enter Author Name
    test('TC13 - Verify Author Name accepts input', async ({ page }) => {
        const author = page.getByPlaceholder('Your name or pen name...');
        await author.fill('Ziya');
        await expect(author).toHaveValue('Ziya');
    });

    // TC14 - Verify user can enter Cover Image URL
    test('TC14 - Verify Cover Image URL accepts input', async ({ page }) => {
        const image = page.getByPlaceholder('https://example.com/image.jpg');
        await image.fill('https://example.com/image.jpg');
        await expect(image).toHaveValue('https://example.com/image.jpg');
    });

    // TC15 - Verify user can enter Blog Content
    test('TC15 - Verify Blog Content accepts input', async ({ page }) => {
        const content = page.locator('textarea');
        await content.fill('This is my first Playwright blog.');
        await expect(content).toHaveValue('This is my first Playwright blog.');
    });

    // TC16 - Verify character counter updates
    test('TC16 - Verify character counter updates', async ({ page }) => {
        const content = page.locator('textarea');
        await content.fill('Hello World');

        await expect(page.getByText(/characters/i)).toBeVisible();
    });

    // TC17 - Verify Home navigation
    test('TC17 - Verify Home navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveURL('http://localhost:3000/');
    });

    // TC18 - Verify Blogs navigation
    test('TC18 - Verify Blogs navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Blogs' }).click();
        await expect(page).toHaveURL(/.*\/blogs/);
    });

    // TC19 - Verify Profile navigation
    test('TC19 - Verify Profile navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Profile' }).click();
        await expect(page).toHaveURL(/.*\/profile/);
    });

    // TC20 - Verify Create Blog navigation
    test('TC20 - Verify Create Blog navigation', async ({ page }) => {
        await page.getByRole('link', { name: 'Create Blog' }).click();
        await expect(page).toHaveURL(/.*\/create-blog/);
    });

});