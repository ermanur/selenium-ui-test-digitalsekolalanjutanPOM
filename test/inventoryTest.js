const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const LoginPage = require("../pages/loginPage");
const InventoryPage = require("../pages/inventoryPage");
const testData = require("../fixtures/testData.json");
const CheckoutPage = require("../pages/checkoutPage");
const fs = require("fs");
const path = require("path");


async function InventoryTest() {
  describe("Saucedemo Login Test", function () {
    let driver;
    let browserName = "chrome";
    let loginPage;
    let inventoryPage;
    let checkoutPage;

    beforeEach(async function () {
      // Menambahkan timeout
      this.timeout(30000); // 10.000 ms = 10 detik

       // Membuat koneksi dengan webdriver
       driver = await new Builder().forBrowser(browserName).build();
       loginPage = await new LoginPage(driver)
       inventoryPage = await new InventoryPage(driver)
       checkoutPage = await new CheckoutPage(driver)
       //open url
       await loginPage.open("https://saucedemo.com")
       await loginPage.login("standard_user", "secret_sauce");
    });

    it("TC01 add to cart 1 item - positif case", async function () {
      await inventoryPage.addToCart();
      await inventoryPage.goToCart();
       // Assertion untuk memastikan produk ada di keranjang
            let item = await inventoryPage.getTitleProduct();
            assert.strictEqual(
              item.includes(testData.assertProduct),
              true,
              testData.productError
            );
       //proses checkout
        await checkoutPage.clickCheckoutButton();
        await checkoutPage.checkout(testData.checkout.firstname,testData.checkout.lastname, testData.checkout.postalcode);
        await checkoutPage.clickContinueButton();

      // Selesaikan pembelian
      await checkoutPage.clickFinishButton();
      await checkoutPage.clickBackButton();

      // Assertion untuk memastikan kembali ke halaman utama
      let backtohome = await inventoryPage.getBackToHome();
      assert.strictEqual(
        backtohome.includes(testData.assertBackProduct),
        true,
        testData.backProductError
      );

      console.log(testData.logback.addToCartSuccess);
     }),

     it("TC02 add to cart 0 item - negtaive case", async function () {
      await inventoryPage.goToCart();
       //proses checkout
        await checkoutPage.clickCheckoutButton();
        await checkoutPage.checkout(testData.checkout.firstname,testData.checkout.lastname, testData.checkout.postalcode);
        await checkoutPage.clickContinueButton();

      // Selesaikan pembelian
      await checkoutPage.clickFinishButton();
      await checkoutPage.clickBackButton();

      // Assertion untuk memastikan kembali ke halaman utama
      let backtohome = await inventoryPage.getBackToHome();
      assert.strictEqual(
        backtohome.includes(testData.assertBackProduct),
        true,
        testData.backProductError
      );

      console.log(testData.logback.addToCartFailed);
     }),

     it("TC03 add to cart 2 item - positif case", async function () {
      await inventoryPage.addToCart();
      await inventoryPage.addToCart1();
      await inventoryPage.goToCart();
       // Assertion untuk memastikan produk ada di keranjang
            let item = await inventoryPage.getTitleProduct();
            assert.strictEqual(
              item.includes(testData.assertProduct),
              true,
              testData.productError
            );
       //proses checkout
        await checkoutPage.clickCheckoutButton();
        await checkoutPage.checkout(testData.checkout.firstname,testData.checkout.lastname, testData.checkout.postalcode);
        await checkoutPage.clickContinueButton();

      // Selesaikan pembelian
      await checkoutPage.clickFinishButton();
      await checkoutPage.clickBackButton();

      // Assertion untuk memastikan kembali ke halaman utama
      let backtohome = await inventoryPage.getBackToHome();
      assert.strictEqual(
        backtohome.includes(testData.assertBackProduct),
        true,
        testData.backProductError
      );
      console.log(testData.logback.addToCartSuccess);
     }),

afterEach(async function () {
        const screenshotDir = path.join(__dirname, "../screenshots");
        if (!fs.existsSync(screenshotDir)) {
          fs.mkdirSync(screenshotDir);
        }
  
        // Gunakan nama test case untuk screenshot
        const testCaseName = this.currentTest.title.replace(/\s+/g, "_"); // Ganti spasi dengan underscore
  
        // Simpan screenshot baru dengan nama test case
        const image = await driver.takeScreenshot();
        fs.writeFileSync(
          path.join(screenshotDir, `${testCaseName}_new.png`),
          image,
          "base64"
        );
        await driver.quit();
      });
    });
  }
InventoryTest();
