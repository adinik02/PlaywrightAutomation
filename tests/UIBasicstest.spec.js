// tests/login.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
const dataset = require("../utils/testData.json");

test.describe.configure({mode:'parallel'});

test.describe('Practice Test Automation Login Scenarios', () => {

  test('Valid Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.verifyLoginPageTitle();
    await loginPage.login('student', 'Password123');

    await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation");
    await page.getByRole('link', { name: 'Log out' }).click();
  });

  test('Negative Username Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.verifyLoginPageTitle();
    await loginPage.login('incorrectusername', 'Password123');

    const msg = await loginPage.getErrorMessage();
    console.log('Error message:', msg);
    await expect(loginPage.errorMsg).toHaveText('Your username is invalid!');
  });

  test('Negative Password Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.verifyLoginPageTitle();
    await loginPage.login('student', 'WrongPassword');

    const msg = await loginPage.getErrorMessage();
    console.log('Error message:', msg);
    await expect(loginPage.errorMsg).toHaveText('Your password is invalid!');
  });

  test('Google Page Test', async ({ page }) => {
    await page.goto("https://www.google.com/");
    const title = await page.title();
    console.log("Title of the Page is:", title);
    await expect(page).toHaveTitle("Google");
  });

});
