const { By } = require("selenium-webdriver");
const assert = require("assert");

class CheckoutPage {
  constructor(driver) {
    this.driver = driver;
    this.checkoutButton = By.id("checkout");
    this.firstnameInput = By.id("first-name");
    this.lastnameInput = By.id("last-name");
    this.postalcodeInput = By.id("postal-code");
    this.continueButton = By.id("continue");
    this.finishButton = By.id("finish");
    this.backButton = By.id("back-to-products");
  }

  async clickCheckoutButton() {
    await this.driver.findElement(this.checkoutButton).click();
  }
  
  async checkout(firstname, lastname, postalcode) {
    await this.driver.findElement(this.firstnameInput).sendKeys(firstname);
    await this.driver.findElement(this.lastnameInput).sendKeys(lastname);
    await this.driver.findElement(this.postalcodeInput).sendKeys(postalcode);
  }
  async clickContinueButton() {
    await this.driver.findElement(this.continueButton).click();
  }
  async clickFinishButton() {
    await this.driver.findElement(this.finishButton).click();
  }
  async clickBackButton() {
    await this.driver.findElement(this.backButton).click();
  }

}

module.exports = CheckoutPage;
