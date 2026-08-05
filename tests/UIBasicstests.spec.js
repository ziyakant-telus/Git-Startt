const { test ,expect} = require("@playwright/test"); //importing test annotations/package


test("First Playwright test", async ({ browser }) =>
{
  //browser is a global fixture or global variable

  //creating instance
  const context = await browser.newContext();
  const page = await context.newPage(); //we open apage on afresh instace

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


});

// another test example to show that if we pass page inside the function the browser will automatically understood what to open, means the gguy has no proxy,cookies

test.only("Second Playwright test", async ({ page }) =>
{
  
  await page.goto("http://google.com");


  console.log(await page.title());
  await expect(page).toHaveTitle("Google");

});






