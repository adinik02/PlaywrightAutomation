// pages/LoginPage.js
import { expect } from '@playwright/test';


export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.errorMsg = page.locator('#error');
    this.header = page.getByRole('heading', { name: 'Test Login' });
  }

  async open() {
    await this.page.goto("https://practicetestautomation.com/practice-test-login/");
  }

  async verifyLoginPageTitle() {
    await this.header.click();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveTitle("Test Login | Practice Test Automation");
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitBtn.click();
  }

  async getErrorMessage() {
    return await this.errorMsg.textContent();
  }
}
