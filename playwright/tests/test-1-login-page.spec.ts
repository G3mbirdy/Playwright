import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click .login_logo
  await page.locator('.login_logo').click({
    button: 'right'
  });

  // Click text=Password for all users:secret_sauce
  await page.locator('text=Password for all users:secret_sauce').click({
    button: 'right'
  });

  // Click text=Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitc
  await page.locator('text=Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitc').click();

  // Click .bot_column
  await page.locator('.bot_column').click();

  // Click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').click();

  // Click form div:has-text("Epic sadface: Username is required")
  await page.locator('form div:has-text("Epic sadface: Username is required")').click();

  // Click text=Epic sadface: Username is requiredLoginAccepted usernames are:standard_userlocke
  await page.locator('text=Epic sadface: Username is requiredLoginAccepted usernames are:standard_userlocke').click();

});