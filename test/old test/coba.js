
const { Builder, By, until } = require('selenium-webdriver');

(async function testSauceDemo() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // 1. Buka situs saucedemo
        await driver.get('https://www.saucedemo.com/');

        // 2. Login dengan user standar
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        // Tunggu halaman utama muncul
        await driver.wait(until.elementLocated(By.className('inventory_list')), 5000);

        // 3. Tambahkan item ke keranjang (misalnya: Sauce Labs Backpack)
        await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click();

        // 4. Cek apakah cart badge muncul
        let cartBadge = await driver.findElement(By.className('shopping_cart_badge')).getText();
        
        if (cartBadge === '1') {
            console.log('✅ Item berhasil ditambahkan ke cart!');
        } else {
            console.log('❌ Item gagal ditambahkan ke cart.');
        }

        // 5. Klik cart dan verifikasi item di dalamnya
        await driver.findElement(By.className('shopping_cart_link')).click();

        // Tunggu halaman cart terbuka
        await driver.wait(until.elementLocated(By.className('cart_list')), 5000);

        // 6. Periksa apakah item ada di cart
        let cartItem = await driver.findElement(By.className('inventory_item_name')).getText();
        
        if (cartItem.includes('Sauce Labs Backpack')) {
            console.log('✅ Item benar-benar ada di cart!');
        } else {
            console.log('❌ Item tidak ditemukan di cart.');
        }

    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    } finally {
        // 7. Tutup browser
        await driver.quit();
    }
})();
