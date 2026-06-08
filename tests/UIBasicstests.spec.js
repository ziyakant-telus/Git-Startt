const { test } = require("@playwright/test"); //importing test annotations/package

test("First Playwright test", async ({ browser }) => {
  //browser is a global fixture or global variable

  //creating instance
  const context = browser.newContext();
  const page = context.newPage(); //we open apage on afresh instace

  await page.goto("https://rahulshetty academy.com/loginpagePractisr/");
});

// another test example to shoe that if we pass page inside the function the browser will automatically understood what to open, means the gguy has no proxy,cookies

test("First Playwright test", async ({ page }) => {
  //browser is a global fixture or global variable

  //creating instance
  //const context = browser.newContext();
  //const page = context.newPage(); //we open apage on afresh instace

  await page.goto("https://google.com");
});
