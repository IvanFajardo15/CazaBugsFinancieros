import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  readonly productName: Locator;
  readonly accountNumber: Locator;
  readonly creationDate: Locator;
  readonly expirationDate: Locator;
  readonly amount: Locator;
  readonly optionsButton: Locator;   

    constructor(page: Page) {
        super(page);
            this.productName = page.locator('#productName');
            this.accountNumber = page.locator('#accountNumber');
            this.creationDate = page.locator('#creationDate');
            this.expirationDate = page.locator('#expirationDate');
            this.amount = page.locator('#amount');
            this.optionsButton = page.locator('#optionsButton');
        }

    async open(){
        await super.open("products-list");
    }

    async verifyFields(productName: string,accountNumber: string, creationDate: string, expirationDate: string, amount: string) {
      await expect(this.productName).toHaveValue(productName);
      await expect(this.accountNumber).toHaveValue(accountNumber);
      await expect(this.creationDate).toHaveValue(creationDate);
      await expect(this.expirationDate).toHaveValue(expirationDate);
      await expect(this.amount).toHaveValue(amount);
      await expect(this.optionsButton).toBeVisible();
    }
}