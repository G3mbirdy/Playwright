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

  // Click text=Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Ap
  await page.locator('text=Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Ap').click();

  // Click #item_1_title_link >> text=Sauce Labs Bolt T-Shirt
  await page.locator('#item_1_title_link >> text=Sauce Labs Bolt T-Shirt').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');

  // Click [data-test="add-to-cart-sauce-labs-bolt-t-shirt"]
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click({
    button: 'right'
  });

  // Click [data-test="add-to-cart-sauce-labs-bolt-t-shirt"]
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

  // Click [data-test="remove-sauce-labs-bolt-t-shirt"]
  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click({
    button: 'right'
  });

  // Click text=$15.99
  await page.locator('text=$15.99').click();

  // Click [data-test="back-to-products"]
  await page.locator('[data-test="back-to-products"]').click({
    button: 'right'
  });

  // Click [data-test="back-to-products"]
  await page.locator('[data-test="back-to-products"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=It's not every day that you come across a midweight quarter-zip fleece jacket ca
  await page.locator('text=It\'s not every day that you come across a midweight quarter-zip fleece jacket ca').click();

  // Click text=$49.99
  await page.locator('text=$49.99').click();

  // Click text=Sauce Labs Fleece Jacket
  await page.locator('text=Sauce Labs Fleece Jacket').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=5');

  // Click text=It's not every day that you come across a midweight quarter-zip fleece jacket ca
  await page.locator('text=It\'s not every day that you come across a midweight quarter-zip fleece jacket ca').click();

  // Click text=$49.99
  await page.locator('text=$49.99').click();

  // Click text=Sauce Labs Fleece Jacket
  await page.locator('text=Sauce Labs Fleece Jacket').click();

  // Click [data-test="add-to-cart-sauce-labs-fleece-jacket"]
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click({
    button: 'right'
  });

  // Click [data-test="add-to-cart-sauce-labs-fleece-jacket"]
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  // Click [data-test="remove-sauce-labs-fleece-jacket"]
  await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click({
    button: 'right'
  });

  // Click text=Sauce Labs Fleece JacketIt's not every day that you come across a midweight quar
  await page.locator('text=Sauce Labs Fleece JacketIt\'s not every day that you come across a midweight quar').click();

  // Click span:has-text("2")
  await page.locator('span:has-text("2")').click({
    button: 'right'
  });

  // Click a:has-text("2")
  await page.locator('a:has-text("2")').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click text=It's not every day that you come across a midweight quarter-zip fleece jacket ca
  await page.locator('text=It\'s not every day that you come across a midweight quarter-zip fleece jacket ca').click();

  // Click text=Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Ap
  await page.locator('text=Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Ap').click();

  // Click #item_1_title_link >> text=Sauce Labs Bolt T-Shirt
  await page.locator('#item_1_title_link >> text=Sauce Labs Bolt T-Shirt').click({
    button: 'right'
  });

  // Click text=Sauce Labs Fleece Jacket
  await page.locator('text=Sauce Labs Fleece Jacket').click({
    button: 'right'
  });

  // Click text=$49.99
  await page.locator('text=$49.99').click();

  // Click text=$15.99
  await page.locator('text=$15.99').click();

  // Click [data-test="checkout"]
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  // Click [data-test="firstName"]
  await page.locator('[data-test="firstName"]').click();

  // Fill [data-test="firstName"]
  await page.locator('[data-test="firstName"]').fill('firstName');

  // Press Tab
  await page.locator('[data-test="firstName"]').press('Tab');

  // Fill [data-test="lastName"]
  await page.locator('[data-test="lastName"]').fill('lastName');

  // Click [data-test="postalCode"]
  await page.locator('[data-test="postalCode"]').click();

  // Fill [data-test="postalCode"]
  await page.locator('[data-test="postalCode"]').fill('postalCode');

  // Click [data-test="continue"]
  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  // Click text=Item total: $65.98
  await page.locator('text=Item total: $65.98').click();

  // Click text=Tax: $5.28
  await page.locator('text=Tax: $5.28').click();

  // Click text=Total: $71.26
  await page.locator('text=Total: $71.26').click();

  // Click [data-test="finish"]
  await page.locator('[data-test="finish"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

  // Click text=Checkout: Complete!
  await page.locator('text=Checkout: Complete!').click();

  // Click #header_container div:has-text("Checkout: Complete!")
  await page.locator('#header_container div:has-text("Checkout: Complete!")').click();

  // Click text=Your order has been dispatched, and will arrive just as fast as the pony can get
  await page.locator('text=Your order has been dispatched, and will arrive just as fast as the pony can get').click();

  // Click text=THANK YOU FOR YOUR ORDER
  await page.locator('text=THANK YOU FOR YOUR ORDER').click();

  // Click text=THANK YOU FOR YOUR ORDERYour order has been dispatched, and will arrive just as
  await page.locator('text=THANK YOU FOR YOUR ORDERYour order has been dispatched, and will arrive just as ').click();

  // Click [data-test="back-to-products"]
  await page.locator('[data-test="back-to-products"]').click({
    button: 'right'
  });

  // Click [data-test="back-to-products"]
  await page.locator('[data-test="back-to-products"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});