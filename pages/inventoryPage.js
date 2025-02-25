const { By } = require("selenium-webdriver");
const assert = require("assert");

class InventoryPage {
  constructor(driver) {
    this.driver = driver;
    this.inventoryList = By.className("inventory_list");
    this.appLogo = By.css(".app_logo");
    this.addToCartButton = By.id("add-to-cart-sauce-labs-backpack");
    this.addToCartButton1 = By.id("add-to-cart-sauce-labs-bike-light")
    this.cartIcon = By.css(".shopping_cart_link");
    this.titleProduct = By.css(".inventory_item_name")
    this.backtohome = By.css(".title")
  }

  async getTitleText() {
    return await this.driver.findElement(this.appLogo).getText();
  }
  async addToCart() {
    await this.driver.findElement(this.addToCartButton).click();
  }

  async addToCart1() {
    await this.driver.findElement(this.addToCartButton1).click();
  }
  async goToCart() {
    await this.driver.findElement(this.cartIcon).click();
  }
  async getTitleProduct() {
    return await this.driver.findElement(this.titleProduct).getText();
  }
  async getBackToHome() {
    return await this.driver.findElement(this.backtohome).getText();
  }

}

module.exports = InventoryPage;
