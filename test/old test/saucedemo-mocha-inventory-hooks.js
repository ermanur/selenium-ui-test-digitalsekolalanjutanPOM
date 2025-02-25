const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function saucedemoLoginTest() {
  describe("Saucedemo Login Test", async function () {
    let driver;
    let browserName = "chrome";

    beforeEach(async function () {
      this.timeout(10000); // Set timeout 10 detik
      driver = await new Builder().forBrowser(browserName).build();
      await driver.get("https://www.saucedemo.com");

      // Tunggu hingga halaman benar-benar dimuat
      await driver.wait(until.elementLocated(By.id("user-name")), 5000);
    });

    it("TC01-Login Success", async function () {
      this.timeout(10000); // Set timeout untuk tes ini juga

      // Input username dan password
      await driver.findElement(By.id("user-name")).sendKeys("standard_user");
      await driver.findElement(By.id("password")).sendKeys("secret_sauce");
      await driver.findElement(By.id("login-button")).click();

      // Tunggu hingga halaman berikutnya dimuat
      await driver.wait(until.elementLocated(By.css(".app_logo")), 5000);

      // Assertion untuk memastikan login berhasil
      let titleText = await driver.findElement(By.css(".app_logo")).getText();
      assert.strictEqual(
        titleText.includes("Swag Labs"),
        true,
        'Title does not include "Swag Labs"'
      );

      // Tambah barang ke keranjang
      await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
      await driver.findElement(By.css(".shopping_cart_link")).click();

      // Assertion untuk memastikan produk ada di keranjang
      let item = await driver.findElement(By.css(".inventory_item_name")).getText();
      assert.strictEqual(
        item.includes("Sauce Labs Backpack"),
        true,
        'Product does not include "Sauce Labs Backpack"'
      );

      // Proses checkout
      await driver.findElement(By.id("checkout")).click();
      await driver.findElement(By.id("first-name")).sendKeys("Erma");
      await driver.findElement(By.id("last-name")).sendKeys("Nursetyani");
      await driver.findElement(By.id("postal-code")).sendKeys("16730");
      await driver.findElement(By.id("continue")).click();

      // Selesaikan pembelian
      await driver.findElement(By.id("finish")).click();
      await driver.findElement(By.id("back-to-products")).click();

      // Assertion untuk memastikan kembali ke halaman utama
      let backtohome = await driver.findElement(By.css(".title")).getText();
      assert.strictEqual(
        backtohome.includes("Products"),
        true,
        'Page title does not include "Products"'
      );

      console.log("✅ Testing Login Success!");
    });
    

    it("TC03-Add To Cart 2 product Success", async function () {
      this.timeout(10000); // Set timeout untuk tes ini juga

      // Input username dan password
      await driver.findElement(By.id("user-name")).sendKeys("standard_user");
      await driver.findElement(By.id("password")).sendKeys("secret_sauce");
      await driver.findElement(By.id("login-button")).click();

      // Tunggu hingga halaman berikutnya dimuat
      await driver.wait(until.elementLocated(By.css(".app_logo")), 5000);

      // Assertion untuk memastikan login berhasil
      let titleText = await driver.findElement(By.css(".app_logo")).getText();
      assert.strictEqual(
        titleText.includes("Swag Labs"),
        true,
        'Title does not include "Swag Labs"'
      );

      await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
      await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();
      let cart = await driver.findElement(By.css(".shopping_cart_link")).click();
      
      //assertion
      let item = await driver.findElement(By.css(".inventory_item_name")).getText();
      assert.strictEqual(
      item.includes("Sauce Labs Backpack"),
      true,
      'Prodcut does not include "Sauce Labs Backpack"'
      );

      // Proses checkout
      await driver.findElement(By.id("checkout")).click();
      await driver.findElement(By.id("first-name")).sendKeys("Erma");
      await driver.findElement(By.id("last-name")).sendKeys("Nursetyani");
      await driver.findElement(By.id("postal-code")).sendKeys("16730");
      await driver.findElement(By.id("continue")).click();

      // Selesaikan pembelian
      await driver.findElement(By.id("finish")).click();
      await driver.findElement(By.id("back-to-products")).click();

      // Assertion untuk memastikan kembali ke halaman utama
      let backtohome = await driver.findElement(By.css(".title")).getText();
      assert.strictEqual(
        backtohome.includes("Products"),
        true,
        'Page title does not include "Products"'
      );
      console.log("Testing Login Failed = Success!");
    });

    it("TC03-Add To Cart 2 product Success", async function () {
      this.timeout(10000); // Set timeout untuk tes ini juga

      // Input username dan password
      await driver.findElement(By.id("user-name")).sendKeys("standard_user");
      await driver.findElement(By.id("password")).sendKeys("secret_sauce");
      await driver.findElement(By.id("login-button")).click();

      // Tunggu hingga halaman berikutnya dimuat
      await driver.wait(until.elementLocated(By.css(".app_logo")), 5000);

      // Assertion untuk memastikan login berhasil
      let titleText = await driver.findElement(By.css(".app_logo")).getText();
      assert.strictEqual(
        titleText.includes("Swag Labs"),
        true,
        'Title does not include "Swag Labs"'
      );

      // Tambah barang ke keranjang
      await driver.findElement(By.css(".shopping_cart_link")).click();

      // Proses checkout
      await driver.findElement(By.id("checkout")).click();
      await driver.findElement(By.id("first-name")).sendKeys("Erma");
      await driver.findElement(By.id("last-name")).sendKeys("Nursetyani");
      await driver.findElement(By.id("postal-code")).sendKeys("16730");
      await driver.findElement(By.id("continue")).click();

      // Selesaikan pembelian
      await driver.findElement(By.id("finish")).click();
      await driver.findElement(By.id("back-to-products")).click();

      // Assertion untuk memastikan kembali ke halaman utama
      let backtohome = await driver.findElement(By.css(".title")).getText();
      assert.strictEqual(
        backtohome.includes("Products"),
        true,
        'Page title does not include "Products"'
      );
      console.log("✅ Testing Login Success!");
    });

    it("TC04-Add To Cart 3 product Success", async function () {
      this.timeout(10000); // Set timeout untuk tes ini juga

      // Input username dan password
      await driver.findElement(By.id("user-name")).sendKeys("standard_user");
      await driver.findElement(By.id("password")).sendKeys("secret_sauce");
      await driver.findElement(By.id("login-button")).click();

      // Tunggu hingga halaman berikutnya dimuat
      await driver.wait(until.elementLocated(By.css(".app_logo")), 5000);

      // Assertion untuk memastikan login berhasil
      let titleText = await driver.findElement(By.css(".app_logo")).getText();
      assert.strictEqual(
        titleText.includes("Swag Labs"),
        true,
        'Title does not include "Swag Labs"'
      );

      await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
      await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();
      let cart = await driver.findElement(By.css(".shopping_cart_link")).click();
      
      //assertion
      let item = await driver.findElement(By.css(".inventory_item_name")).getText();
      assert.strictEqual(
      item.includes("Sauce Labs Backpack"),
      true,
      'Prodcut does not include "Sauce Labs Backpack"'
      );

      // Proses checkout
      await driver.findElement(By.id("checkout")).click();
      await driver.findElement(By.id("first-name")).sendKeys("Erma");
      await driver.findElement(By.id("last-name")).sendKeys("Nursetyani");
      await driver.findElement(By.id("postal-code")).sendKeys("16730");
      await driver.findElement(By.id("continue")).click();

      // Selesaikan pembelian
      await driver.findElement(By.id("finish")).click();
      await driver.findElement(By.id("back-to-products")).click();

      // Assertion untuk memastikan kembali ke halaman utama
      let backtohome = await driver.findElement(By.css(".title")).getText();
      assert.strictEqual(
        backtohome.includes("Products"),
        true,
        'Page title does not include "Products"'
      );

      console.log("✅ Testing Login Success!");
    });
    
    afterEach(async function () {
      this.timeout(10000); // Set timeout di afterEach
      await driver.quit();
    });
  });
}

saucedemoLoginTest();
