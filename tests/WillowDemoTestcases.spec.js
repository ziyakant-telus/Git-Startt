import { test, expect } from '@playwright/test';

test.describe('Willow Blog UI Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  // ==========================================================
  // HOME PAGE TESTS
  // ==========================================================

  // TC01 - Verify page loads successfully
  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Create Next App/);
  });

  // TC02 - Verify main container exists
  test('should display main container', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
  });

  // TC03 - Verify navigation bar links are visible
  test('should display navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Blogs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Create Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible();
  });

  // TC04 - Verify user can navigate to Blogs page
  test('should navigate to Blogs page', async ({ page }) => {
    await page.getByRole('link', { name: 'Blogs' }).click();
    await expect(page).toHaveURL('http://localhost:3000/blogs');
  });

  // TC05 - Verify Create Blog link works from navbar
  test('should navigate to Create Blog page from navbar', async ({ page }) => {
    await page.getByRole('link', { name: 'Create Blog' }).click();
    await expect(page).toHaveURL('http://localhost:3000/create-blog');
  });

  // TC06 - Verify Profile link works
  test('should navigate to Profile page', async ({ page }) => {
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL('http://localhost:3000/profile');
  });

  // ==========================================================
  // BLOGS PAGE TESTS
  // ==========================================================

  test.describe('Blogs Page', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/blogs');
    });

    // TC07 - Verify Blogs page loads
    test('should load Blogs page successfully', async ({ page }) => {
      await expect(page).toHaveURL(/.*blogs/);
      await expect(
        page.getByRole('heading', { name: 'Explore Articles' })
      ).toBeVisible();
    });

    // TC08 - Verify heading
    test('should display Explore Articles heading', async ({ page }) => {
      await expect(
        page.getByRole('heading', { name: 'Explore Articles' })
      ).toBeVisible();
    });

    // TC09 - Verify page description
    test('should display page description', async ({ page }) => {
      await expect(
        page.getByText('Thoughts, tutorials, and insights from our community.')
      ).toBeVisible();
    });

    // TC10 - Verify Write Article button
    test('should display Write Article button', async ({ page }) => {
      await expect(
        page.getByRole('button', { name: /Write Article/i })
      ).toBeVisible();
    });

    // TC11 - Verify Write Article button navigation
    test('should navigate to Create Blog page using Write Article button', async ({ page }) => {
      await page.locator('.blogs-write-btn').click();
      await expect(page).toHaveURL('http://localhost:3000/create-blog');
    });

    // TC12 - Verify empty state heading
    test('should display empty state heading', async ({ page }) => {
      await expect(page.getByText('No articles yet')).toBeVisible();
    });

    // TC13 - Verify empty state description
    test('should display empty state description', async ({ page }) => {
      await expect(
        page.getByText('Be the first to share something with the world.')
      ).toBeVisible();
    });

    // TC14 - Verify Create Your First Post button
    test('should display Create Your First Post button', async ({ page }) => {
      await expect(
        page.getByRole('button', { name: 'Create Your First Post' })
      ).toBeVisible();
    });

    // TC15 - Verify Create Your First Post navigation
    test('should navigate to Create Blog using Create Your First Post button', async ({ page }) => {
      await page.getByRole('button', {
        name: 'Create Your First Post'
      }).click();

      await expect(page).toHaveURL('http://localhost:3000/create-blog');
    });

    // TC16 - Verify Home navigation
    test('should navigate back to Home page', async ({ page }) => {
      await page.getByRole('link', { name: 'Home' }).click();
      await expect(page).toHaveURL('http://localhost:3000/');
    });

    // TC17 - Verify Blogs link remains on Blogs page
    test('should stay on Blogs page when Blogs link is clicked', async ({ page }) => {
      await page.getByRole('link', { name: 'Blogs' }).click();
      await expect(page).toHaveURL('http://localhost:3000/blogs');
    });

    // TC18 - Verify Create Blog navbar link
    test('should navigate to Create Blog page from navbar', async ({ page }) => {
      await page.getByRole('link', { name: 'Create Blog' }).click();
      await expect(page).toHaveURL('http://localhost:3000/create-blog');
    });

    // TC19 - Verify Profile navbar link
    test('should navigate to Profile page from Blogs page', async ({ page }) => {
      await page.getByRole('link', { name: 'Profile' }).click();
      await expect(page).toHaveURL('http://localhost:3000/profile');
    });

    // TC20 - Verify logo is visible
    test('should display Willow Blogs logo', async ({ page }) => {
      await expect(page.getByText('Willow Blogs')).toBeVisible();
    });

    // TC21 - Verify footer
    test('should display footer', async ({ page }) => {
      await expect(
        page.getByText('© 2026 Willow Blog App')
      ).toBeVisible();
    });

  });

});