const { Builder, By, Key, until, Browser } = require("selenium-webdriver");
const assert = require("assert");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const edge = require("selenium-webdriver/edge");

async function saucedemoLoginTestCross() {
  //const browsers = ["chrome", "firefox", "MicrosoftEdge"];
  const browsers = [
    {
      name: "chrome",
      options: new chrome.Options().addArguments("--headless=new"),
    },
    {
      name: "firefox",
      options: new firefox.Options().addArguments("--headless=new"),
    },
    {
      name: "MicrosoftEdge",
      options: new edge.Options().addArguments("--headless=new"),
    },
  ];

  for (let browser of browsers) {
    // Membuat koneksi dengan webdriver
    let driver = await new Builder()
      .forBrowser(browser.name)
      .setChromeOptions(browser.name === "chrome" ? browser.options : undefined)
      .setFirefoxOptions(
        browser.name === "firefox" ? browser.options : undefined
      )
      .setEdgeOptions(
        browser.name === "MicrosoftEdge" ? browser.options : undefined
      )
      .build();


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
         console.log("Testing Success! with browser " + browser.name);
    } finally {
      await driver.quit();
    }
  }
}

saucedemoLoginTestCross();
