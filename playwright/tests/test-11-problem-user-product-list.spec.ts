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

  // Click .inventory_list
  await page.locator('.inventory_list').click();

  // Click text=ProductsName (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to
  await page.locator('text=ProductsName (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to').click();

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

  // Click text=$29.99Add to cart
  await page.locator('text=$29.99Add to cart').click();

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click({
    button: 'right'
  });

  // Click img[alt="Sauce Labs Bike Light"]
  await page.locator('img[alt="Sauce Labs Bike Light"]').click({
    button: 'right'
  });

  // Click text=A red light isn't the desired state in testing but it sure helps when riding you
  await page.locator('text=A red light isn\'t the desired state in testing but it sure helps when riding you').click({
    button: 'right'
  });

  // Click text=Sauce Labs Bike Light
  await page.locator('text=Sauce Labs Bike Light').click({
    button: 'right'
  });

});