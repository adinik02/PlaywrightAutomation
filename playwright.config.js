// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Playwright Test Configuration
 * Replace or edit values if you intentionally use a different test folder or device.
 */
module.exports = defineConfig({
  testDir: './tests',
  retries: 1,                // retry failed tests once
  timeout: 30 * 1000,        // 30 seconds max per test
  expect: {
    timeout: 5000            // 5 seconds for expect(...)
  },

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'on',
    ignoreHTTPSErrors: true,  // correct spelling
    permissions: ['geolocation'],
    // If you want a device preset, uncomment and replace with a known device:
    // ...devices['Desktop Chrome']
  },
  reporter: [
    ['list'],                            // shows progress in terminal
    ['html', { outputFolder: 'playwright-report', open: 'never' }] // saves HTML report
  ],

  // optionally add reporters here, e.g. ['list', ['html', { open: 'never' }]]
});
