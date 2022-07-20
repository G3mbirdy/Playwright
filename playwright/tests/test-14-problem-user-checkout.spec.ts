import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Double click [data-test="username"]
  await page.locator('[data-test="username"]').dblclick();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('problem_user');

  // Press Tab
  await page.locator('[data-test="username"]').press('Tab');

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=$29.99Add to cart
  await page.locator('text=$29.99Add to cart').click();

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click text=$9.99Add to cart
  await page.locator('text=$9.99Add to cart').click();

  // Click [data-test="add-to-cart-sauce-labs-bike-light"]
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Click span:has-text("2")
  await page.locator('span:has-text("2")').click({
    button: 'right'
  });

  // Click span:has-text("2")
  await page.locator('span:has-text("2")').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click text=$29.99Remove
  await page.locator('text=$29.99Remove').click();

  // Click text=$9.99Remove
  await page.locator('text=$9.99Remove').click();

  // Click [data-test="checkout"]
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  // Click [data-test="firstName"]
  await page.locator('[data-test="firstName"]').click();

  // Fill [data-test="firstName"]
  await page.locator('[data-test="firstName"]').fill('First');

  // Double click [data-test="lastName"]
  await page.locator('[data-test="lastName"]').dblclick();

  // Fill [data-test="lastName"]
  await page.locator('[data-test="lastName"]').fill('t');

  // Click [data-test="postalCode"]
  await page.locator('[data-test="postalCode"]').click();

  // Fill [data-test="postalCode"]
  await page.locator('[data-test="postalCode"]').fill('ZIP');

  // Click [data-test="continue"]
  await page.locator('[data-test="continue"]').click();

  // Click #checkout_info_container div:has-text("Error: Last Name is required") >> nth=2
  await page.locator('#checkout_info_container div:has-text("Error: Last Name is required")').nth(2).click();

});