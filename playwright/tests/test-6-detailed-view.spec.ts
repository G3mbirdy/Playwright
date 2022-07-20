import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.locator('[data-test="username"]').click();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('standard_user');

  // Click [data-test="password"]
  await page.locator('[data-test="password"]').click();

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').click({
    button: 'right'
  });

  // Click text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis
  await page.locator('text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis').click({
    button: 'right'
  });

  // Click text=$29.99
  await page.locator('text=$29.99').click({
    button: 'right'
  });

  // Click img[alt="Sauce Labs Backpack"]
  await page.locator('img[alt="Sauce Labs Backpack"]').click({
    button: 'right'
  });

  // Click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');

  // Click img[alt="Sauce Labs Backpack"]
  await page.locator('img[alt="Sauce Labs Backpack"]').click({
    button: 'right'
  });

  // Click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').click({
    button: 'right'
  });

  // Click text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis
  await page.locator('text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis').click({
    button: 'right'
  });

  // Click text=$29.99
  await page.locator('text=$29.99').click({
    button: 'right'
  });

  // Click #inventory_item_container
  await page.locator('#inventory_item_container').click();

});