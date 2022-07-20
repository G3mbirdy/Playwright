import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Double click [data-test="username"]
  await page.locator('[data-test="username"]').dblclick();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('standard_user');

  // Click [data-test="password"]
  await page.locator('[data-test="password"]').click();

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=$29.99
  await page.locator('text=$29.99').click();

  // Click text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis
  await page.locator('text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis').click();

  // Click img[alt="Sauce Labs Backpack"]
  await page.locator('img[alt="Sauce Labs Backpack"]').click({
    button: 'right'
  });

  // Click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').click({
    button: 'right'
  });

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click span:has-text("1")
  await page.locator('span:has-text("1")').click({
    button: 'right'
  });

  // Click a:has-text("1")
  await page.locator('a:has-text("1")').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click text=$29.99
  await page.locator('text=$29.99').click();

  // Click text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis
  await page.locator('text=carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis').click();

  // Click text=Sauce Labs Backpack
  await page.locator('text=Sauce Labs Backpack').click({
    button: 'right'
  });

  // Click [data-test="checkout"]
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  // Click [data-test="firstName"]
  await page.locator('[data-test="firstName"]').click();

  // Fill [data-test="firstName"]
  await page.locator('[data-test="firstName"]').fill('First');

  // Press Tab
  await page.locator('[data-test="firstName"]').press('Tab');

  // Fill [data-test="lastName"]
  await page.locator('[data-test="lastName"]').fill('Last');

  // Press Tab
  await page.locator('[data-test="lastName"]').press('Tab');

  // Fill [data-test="postalCode"]
  await page.locator('[data-test="postalCode"]').fill('ZIP');

  // Click [data-test="continue"]
  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  // Click text=$29.99 >> nth=0
  await page.locator('text=$29.99').first().click({
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

  // Click text=SauceCard #31337
  await page.locator('text=SauceCard #31337').click();

  // Click text=FREE PONY EXPRESS DELIVERY!
  await page.locator('text=FREE PONY EXPRESS DELIVERY!').click();

  // Click text=Item total: $29.99
  await page.locator('text=Item total: $29.99').click();

  // Click text=Tax: $2.40
  await page.locator('text=Tax: $2.40').click();

  // Click text=Total: $32.39
  await page.locator('text=Total: $32.39').click();

  // Click [data-test="finish"]
  await page.locator('[data-test="finish"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

  // Click text=THANK YOU FOR YOUR ORDERYour order has been dispatched, and will arrive just as
  await page.locator('text=THANK YOU FOR YOUR ORDERYour order has been dispatched, and will arrive just as ').click();

  // Click img[alt="Pony Express"]
  await page.locator('img[alt="Pony Express"]').click();

  // Click text=THANK YOU FOR YOUR ORDER
  await page.locator('text=THANK YOU FOR YOUR ORDER').click();

  // Click text=Checkout: Complete!
  await page.locator('text=Checkout: Complete!').click();

  // Click [data-test="back-to-products"]
  await page.locator('[data-test="back-to-products"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});