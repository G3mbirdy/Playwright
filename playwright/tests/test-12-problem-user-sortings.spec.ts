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

  // Click text=ProductsName (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to
  await page.locator('text=ProductsName (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to').click();

  // Click #inventory_container >> nth=1
  await page.locator('#inventory_container').nth(1).click();

  // Click text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)
  await page.locator('text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();

  // Select za
  await page.locator('[data-test="product_sort_container"]').selectOption('za');

  // Click text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis
  await page.locator('text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis').click({
    button: 'right'
  });

  // Click text=Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha
  await page.locator('text=Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha').click({
    button: 'right'
  });

  // Click .inventory_item_description >> nth=0
  await page.locator('.inventory_item_description').first().click({
    button: 'right'
  });

  // Click text=Sauce Labs Bike LightA red light isn't the desired state in testing but it sure
  await page.locator('text=Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure ').click();

  // Click text=Sauce Labs Bike LightA red light isn't the desired state in testing but it sure
  await page.locator('text=Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure ').click();

  // Click text=Sauce Labs Fleece JacketIt's not every day that you come across a midweight quar
  await page.locator('text=Sauce Labs Fleece JacketIt\'s not every day that you come across a midweight quar').click();

  // Click text=Sauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-
  await page.locator('text=Sauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-').click();

  // Click text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)
  await page.locator('text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();

  // Select lohi
  await page.locator('[data-test="product_sort_container"]').selectOption('lohi');

  // Click text=$29.99
  await page.locator('text=$29.99').click();

  // Click text=$9.99
  await page.locator('text=$9.99').click();

  // Click text=$15.99 >> nth=0
  await page.locator('text=$15.99').first().click();

  // Click text=$49.99
  await page.locator('text=$49.99').click();

  // Click text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)
  await page.locator('text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();

  // Click text=Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha
  await page.locator('text=Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha').click();

  // Click text=$29.99
  await page.locator('text=$29.99').click();

  // Click text=Sauce Labs Bike LightA red light isn't the desired state in testing but it sure
  await page.locator('text=Sauce Labs Bike LightA red light isn\'t the desired state in testing but it sure ').click();

  // Click text=$9.99Add to cart
  await page.locator('text=$9.99Add to cart').click();

  // Click text=Sauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-
  await page.locator('text=Sauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-').click();

  // Click text=$15.99Add to cart >> nth=0
  await page.locator('text=$15.99Add to cart').first().click();

  // Click text=Sauce Labs Fleece JacketIt's not every day that you come across a midweight quar
  await page.locator('text=Sauce Labs Fleece JacketIt\'s not every day that you come across a midweight quar').click();

  // Click text=$49.99Add to cart
  await page.locator('text=$49.99Add to cart').click();

});