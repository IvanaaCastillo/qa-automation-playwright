import { test, expect } from '@playwright/test';

test('Agregar producto al carrito', async ({ page }) => {

    // 1. Ir al sitio
    await page.goto('https://www.saucedemo.com/');

    // 2. Login
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    // 3. Agregar producto al carrito
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // 4. Ir al carrito
    await page.click('.shopping_cart_link');

    // 5. Validar que el producto está en el carrito
    await expect(page.locator('.cart_item')).toBeVisible();

});