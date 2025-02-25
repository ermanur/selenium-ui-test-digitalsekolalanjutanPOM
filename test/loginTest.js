const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const LoginPage = require("../pages/loginPage");
const InventoryPage = require("../pages/inventoryPage");
const testData = require("../fixtures/testData.json");
const fs = require("fs");
const path = require("path");

async function saucedemoLoginTest() {
  describe("Saucedemo Login Test", function () {
    let driver;
    let browserName = "chrome";
    let loginPage;
    let inventoryPage;

    beforeEach(async function () {
      // Menambahkan timeout
      this.timeout(30000); // 10.000 ms = 10 detik

       // Membuat koneksi dengan webdriver
       driver = await new Builder().forBrowser(browserName).build();
       loginPage = await new LoginPage(driver)
       inventoryPage = await new InventoryPage(driver)
       //open url
       //await driver.get("https://saucedemo.com");
       //await loginPage.open("https://saucedemo.com")
      await loginPage.open(testData.baseUrl);
      });

    it("TC01-Login Success", async function () {
      //await loginPage.login("standard_user", "secret_sauce");
      await loginPage.login(testData.validuser.username,testData.validuser.password);
      //assertion
      let titleText = await inventoryPage.getTitleText();
      assert.strictEqual(
        titleText.includes(testData.assertTitle),
        true,
        testData.titleError
      );
      console.log(testData.log.LoginSuccess);
    }),

      it("TC02-Login Failed", async function () {
        await loginPage.login(
          testData.invalidUser.username,
          testData.invalidUser.password
        );

        //assertion
        await loginPage.verifyLoginFailed(
          testData.messages.expectedloginError,
          testData.messages.loginError
        );

        console.log(testData.log.LoginFailed);
      });

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

saucedemoLoginTest();
