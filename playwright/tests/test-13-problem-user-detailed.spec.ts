import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.locator('[data-test="username"]').click();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('problem_user');

  // Press Tab
  await page.locator('[data-test="username"]').press('Tab');

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha
  await page.locator('text=Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha').click();

  // Click text=$29.99
  await page.locator('text=$29.99').click();

  // Click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=5');

  // Click img[alt="Sauce Labs Fleece Jacket"]
  await page.locator('img[alt="Sauce Labs Fleece Jacket"]').click();

  // Click text=$49.99
  await page.locator('text=$49.99').click();
  // incorrect pass

  // Click text=It's not every day that you come across a midweight quarter-zip fleece jacket ca
  await page.locator('text=It\'s not every day that you come across a midweight quarter-zip fleece jacket ca').click();

  // Click text=Sauce Labs Fleece JacketIt's not every day that you come across a midweight quar
  await page.locator('text=Sauce Labs Fleece JacketIt\'s not every day that you come across a midweight quar').click();

});