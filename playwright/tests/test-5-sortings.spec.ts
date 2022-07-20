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

  // Click text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)
  await page.locator('text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();

  // Click text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)
  await page.locator('text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click({
    button: 'right'
  });

  // Click #inventory_container >> nth=1
  await page.locator('#inventory_container').nth(1).click();

  // Click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').click({
    button: 'right'
  });

  // Click text=Sauce Labs Bike Light
  await page.locator('text=Sauce Labs Bike Light').click({
    button: 'right'
  });

  // Click #item_1_title_link >> text=Sauce Labs Bolt T-Shirt
  await page.locator('#item_1_title_link >> text=Sauce Labs Bolt T-Shirt').click({
    button: 'right'
  });

  // Click text=Sauce Labs Fleece Jacket
  await page.locator('text=Sauce Labs Fleece Jacket').click({
    button: 'right'
  });

  // Click text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)
  await page.locator('text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();

  // Select za
  await page.locator('[data-test="product_sort_container"]').selectOption('za');

  // Click text=Test.allTheThings() T-Shirt (Red)
  await page.locator('text=Test.allTheThings() T-Shirt (Red)').click({
    button: 'right'
  });

  // Click text=Sauce Labs Onesie
  await page.locator('text=Sauce Labs Onesie').click({
    button: 'right'
  });

  // Click text=Sauce Labs Fleece Jacket
  await page.locator('text=Sauce Labs Fleece Jacket').click({
    button: 'right'
  });

  // Click #item_1_title_link >> text=Sauce Labs Bolt T-Shirt
  await page.locator('#item_1_title_link >> text=Sauce Labs Bolt T-Shirt').click({
    button: 'right'
  });

  // Click text=Name (Z to A)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)
  await page.locator('text=Name (Z to A)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();

  // Select lohi
  await page.locator('[data-test="product_sort_container"]').selectOption('lohi');

  // Click text=$7.99
  await page.locator('text=$7.99').click({
    button: 'right'
  });

  // Click text=$9.99
  await page.locator('text=$9.99').click({
    button: 'right'
  });

  // Click text=$15.99 >> nth=0
  await page.locator('text=$15.99').first().click({
    button: 'right'
  });

  // Click text=$15.99 >> nth=1
  await page.locator('text=$15.99').nth(1).click({
    button: 'right'
  });

  // Click text=Price (low to high)Name (A to Z)Name (Z to A)Price (low to high)Price (high to l
  await page.locator('text=Price (low to high)Name (A to Z)Name (Z to A)Price (low to high)Price (high to l').click();

});