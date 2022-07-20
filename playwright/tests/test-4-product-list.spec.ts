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

  // Double click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').dblclick();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click .inventory_item_description >> nth=0
  await page.locator('.inventory_item_description').first().click();

  // Click img[alt="Sauce Labs Backpack"]
  await page.locator('img[alt="Sauce Labs Backpack"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');

  // Click [data-test="back-to-products"]
  await page.locator('[data-test="back-to-products"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click img[alt="Sauce Labs Backpack"]
  await page.locator('img[alt="Sauce Labs Backpack"]').click({
    button: 'right'
  });

  // Click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').click({
    button: 'right'
  });

  // Click text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis
  await page.locator('text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis').click();

  // Click text=$29.99
  await page.locator('text=$29.99').click();

  // Click span:has-text("1")
  await page.locator('span:has-text("1")').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click a:has-text("1")
  await page.locator('a:has-text("1")').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click [data-test="continue-shopping"]
  await page.locator('[data-test="continue-shopping"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click div:nth-child(2) > .inventory_item_description
  await page.locator('div:nth-child(2) > .inventory_item_description').click();

  // Click text=Sauce Labs Bike Light
  await page.locator('text=Sauce Labs Bike Light').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=0');

  // Click [data-test="back-to-products"]
  await page.locator('[data-test="back-to-products"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click img[alt="Sauce Labs Bike Light"]
  await page.locator('img[alt="Sauce Labs Bike Light"]').click({
    button: 'right'
  });

  // Click [data-test="add-to-cart-sauce-labs-bike-light"]
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click({
    button: 'right'
  });

  // Click text=$9.99
  await page.locator('text=$9.99').click();

  // Click div:nth-child(2) > .inventory_item_description
  await page.locator('div:nth-child(2) > .inventory_item_description').click();

  // Click [data-test="add-to-cart-sauce-labs-bike-light"]
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Click span:has-text("2")
  await page.locator('span:has-text("2")').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

});