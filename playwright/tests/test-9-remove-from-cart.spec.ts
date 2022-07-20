import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.locator('[data-test="username"]').click();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('standard_user');

  // Press Tab
  await page.locator('[data-test="username"]').press('Tab');

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=Rib snap infant onesie for the junior automation engineer in development. Reinfo
  await page.locator('text=Rib snap infant onesie for the junior automation engineer in development. Reinfo').click();

  // Click text=$7.99
  await page.locator('text=$7.99').click();

  // Click [data-test="add-to-cart-sauce-labs-onesie"]
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click({
    button: 'right'
  });

  // Click [data-test="add-to-cart-sauce-labs-onesie"]
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

  // Click span:has-text("1")
  await page.locator('span:has-text("1")').click({
    button: 'right'
  });

  // Click span:has-text("1")
  await page.locator('span:has-text("1")').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click text=Rib snap infant onesie for the junior automation engineer in development. Reinfo
  await page.locator('text=Rib snap infant onesie for the junior automation engineer in development. Reinfo').click();

  // Click text=Sauce Labs Onesie
  await page.locator('text=Sauce Labs Onesie').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=2');

  // Click text=$7.99
  await page.locator('text=$7.99').click();

  // Click text=Rib snap infant onesie for the junior automation engineer in development. Reinfo
  await page.locator('text=Rib snap infant onesie for the junior automation engineer in development. Reinfo').click();

  // Click a:has-text("1")
  await page.locator('a:has-text("1")').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click [data-test="remove-sauce-labs-onesie"]
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();

  // Click #cart_contents_container
  await page.locator('#cart_contents_container').click();

});