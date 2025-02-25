const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

async function saucedemoInventory() {
  describe("Saucedemo Inventory", function (done) {
    it("TC01-Add To Cart Success", async function () {
      // Menambahkan timeout
      this.timeout(20000); // 10.000 ms = 10 detik

      // Membuat koneksi dengan webdriver
      let driver = await new Builder().forBrowser("chrome").build();

      // Exception Handling & Conclusion
      try {
      // Buka URL di browser
        await driver.get("https://saucedemo.com");
    
        //login
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver
          .findElement(By.xpath("//input[@id='password']"))
          .sendKeys("secret_sauce");
    
        await driver.findElement(By.name("login-button")).click();
    
        //assertion
        let titleText = await driver.findElement(By.css(".app_logo")).getText();
        assert.strictEqual(
        titleText.includes("Swag Lab"),
        true,
        'Title does not include "Swag Labs"'
         );
        //add to cart in home
        await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
        let cart = await driver.findElement(By.css(".shopping_cart_link")).click();
         //assertion
         let item = await driver.findElement(By.css(".inventory_item_name")).getText();
         assert.strictEqual(
         item.includes("Sauce Labs Backpack"),
         true,
         'Prodcut does not include "Sauce Labs Backpack"'
          );
    
        await driver.findElement(By.id("checkout")).click();
    
        //checkout your information in add to cart in home
        await driver.findElement(By.id("first-name")).sendKeys("Erma");
        await driver.findElement(By.id("last-name")).sendKeys("Nursetyani");
        await driver.findElement(By.id("postal-code")).sendKeys("16730");
        await driver.findElement(By.id("continue")).click();
    
        //button finish in add to cart in home
        await driver.findElement(By.id("finish")).click();
    
        //button back to home 
        await driver.findElement(By.id("back-to-products")).click();
        //assertion
        let backtohome = await driver.findElement(By.css(".title")).getText();
        assert.strictEqual(
        backtohome.includes("Products"),
        true,
        'Product does not include "Products"'
         );
        console.log("Testing Login and add to cart Success!");
      } finally {
        await driver.quit();
      }
    }),
      it("TC02-Add To Cart Empty", async function () {//ini bug harusnya ketika productnya empty ga bisa checkout
        // Menambahkan timeout
        this.timeout(20000); // 10.000 ms = 10 detik

        // Script login failed
        // Membuat koneksi dengan webdriver
        let driver = await new Builder().forBrowser("chrome").build();

        // Exception Handling & Conclusion
        try {
          // Buka URL di browser
        await driver.get("https://saucedemo.com");
    
        //login
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver
          .findElement(By.xpath("//input[@id='password']"))
          .sendKeys("secret_sauce");
    
        await driver.findElement(By.name("login-button")).click();
    
        //assertion
        let titleText = await driver.findElement(By.css(".app_logo")).getText();
        assert.strictEqual(
        titleText.includes("Swag Lab"),
        true,
        'Title does not include "Swag Labs"'
         );
        //add to cart in home
        let cart = await driver.findElement(By.css(".shopping_cart_link")).click();
        await driver.findElement(By.id("checkout")).click();
    
        //checkout your information in add to cart in home
        await driver.findElement(By.id("first-name")).sendKeys("Erma");
        await driver.findElement(By.id("last-name")).sendKeys("Nursetyani");
        await driver.findElement(By.id("postal-code")).sendKeys("16730");
        await driver.findElement(By.id("continue")).click();
    
        //button finish in add to cart in home
        await driver.findElement(By.id("finish")).click();
    
        //button back to home 
        await driver.findElement(By.id("back-to-products")).click();
        //assertion
        let backtohome = await driver.findElement(By.css(".title")).getText();
        assert.strictEqual(
        backtohome.includes("Products"),
        true,
        'Product does not include "Products"'
         );
          console.log("Testing Login Failed = Success!");
        } finally {
          await driver.quit();
        }
      });
      it("TC03-Add To Cart 2 product Success", async function () {
        // Menambahkan timeout
        this.timeout(20000); // 10.000 ms = 10 detik
  
        // Membuat koneksi dengan webdriver
        let driver = await new Builder().forBrowser("chrome").build();
  
        // Exception Handling & Conclusion
        try {
        // Buka URL di browser
          await driver.get("https://saucedemo.com");
      
          //login
          await driver.findElement(By.id("user-name")).sendKeys("standard_user");
          await driver
            .findElement(By.xpath("//input[@id='password']"))
            .sendKeys("secret_sauce");
      
          await driver.findElement(By.name("login-button")).click();
      
          //assertion
          let titleText = await driver.findElement(By.css(".app_logo")).getText();
          assert.strictEqual(
          titleText.includes("Swag Lab"),
          true,
          'Title does not include "Swag Labs"'
           );
          //add to cart in home
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
      
          await driver.findElement(By.id("checkout")).click();
      
          //checkout your information in add to cart in home
          await driver.findElement(By.id("first-name")).sendKeys("Erma");
          await driver.findElement(By.id("last-name")).sendKeys("Nursetyani");
          await driver.findElement(By.id("postal-code")).sendKeys("16730");
          await driver.findElement(By.id("continue")).click();
      
          //button finish in add to cart in home
          await driver.findElement(By.id("finish")).click();
      
          //button back to home 
          await driver.findElement(By.id("back-to-products")).click();
          //assertion
          let backtohome = await driver.findElement(By.css(".title")).getText();
          assert.strictEqual(
          backtohome.includes("Products"),
          true,
          'Product does not include "Products"'
           );
          console.log("Testing Login Success!");
        } finally {
          await driver.quit();
        }
      }),
      it("TC04-Add To Cart 3 product Success", async function () {
        // Menambahkan timeout
        this.timeout(20000); // 10.000 ms = 10 detik
  
        // Membuat koneksi dengan webdriver
        let driver = await new Builder().forBrowser("chrome").build();
  
        // Exception Handling & Conclusion
        try {
        // Buka URL di browser
          await driver.get("https://saucedemo.com");
      
          //login
          await driver.findElement(By.id("user-name")).sendKeys("standard_user");
          await driver
            .findElement(By.xpath("//input[@id='password']"))
            .sendKeys("secret_sauce");
      
          await driver.findElement(By.name("login-button")).click();
      
          //assertion
          let titleText = await driver.findElement(By.css(".app_logo")).getText();
          assert.strictEqual(
          titleText.includes("Swag Lab"),
          true,
          'Title does not include "Swag Labs"'
           );
          //add to cart in home
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
            await driver.findElement(By.id("continue-shopping")).click();
            await driver.findElement(By.id("add-to-cart-sauce-labs-bolt-t-shirt")).click();
            let cart1 = await driver.findElement(By.css(".shopping_cart_link")).click();
           //assertion
           let item1 = await driver.findElement(By.css(".inventory_item_name")).getText();
           assert.strictEqual(
           item.includes("Sauce Labs Backpack"),
           true,
           'Prodcut does not include "Sauce Labs Backpack"'
            );
            await driver.findElement(By.id("checkout")).click();
      
          //checkout your information in add to cart in home
          await driver.findElement(By.id("first-name")).sendKeys("Erma");
          await driver.findElement(By.id("last-name")).sendKeys("Nursetyani");
          await driver.findElement(By.id("postal-code")).sendKeys("16730");
          await driver.findElement(By.id("continue")).click();
      
          //button finish in add to cart in home
          await driver.findElement(By.id("finish")).click();
      
          //button back to home 
          await driver.findElement(By.id("back-to-products")).click();
          //assertion
          let backtohome = await driver.findElement(By.css(".title")).getText();
          assert.strictEqual(
          backtohome.includes("Products"),
          true,
          'Product does not include "Products"'
           );
          console.log("Testing Login Success!");
        } finally {
          await driver.quit();
        }
      })
  });
}

saucedemoInventory();
