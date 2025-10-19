const {test, expect} = require('@playwright/test');
const { title } = require('process');

test('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext({
        viewport: null
    });
    const page = await context.newPage();
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    // console.log(await page.title());
    // await expect(page).toHaveTitle("Google");
    // Playwright only suggest to write CSS
    
  await page.getByRole('heading', { name: 'Test login' }).click();
  const title = await page.title();
  console.log('Page one Title is: ' +title);
  await expect(page).toHaveTitle("Test Login | Practice Test Automation");
  await expect(page.locator("section[id='login'] h2")).toContainText("Test");
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await expect(page.locator("#submit")).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
  const title2 = await page.title();
  console.log('Page two Title is: ' +title2);
  await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation");
  await page.getByRole('link', { name: 'Log out' }).click();

});



test('Page Playwright test', async ({page})=>
{
    await page.goto("https://www.google.com/");
    const title = await page.title();
    console.log("Title of the Page is: " +title);
    await expect(page).toHaveTitle("Google");

});