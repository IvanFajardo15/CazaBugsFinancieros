import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SimulatorPage extends BasePage {
  readonly accountType: Locator;
  readonly accountNumber: Locator;
  readonly term: Locator;
  readonly monthlyAmount: Locator;
  readonly calculateButton: Locator;
  readonly errorMessage: Locator;   

    constructor(page: Page) {
        super(page);
            this.accountType = page.locator('#accountType');
            this.accountNumber = page.locator('#accountNumber');
            this.term = page.locator('#term');
            this.monthlyAmount = page.locator('#monthlyAmount');
            this.calculateButton = page.locator('#btnCalculate');
            this.errorMessage = page.locator('#monthlyAmountError');
        }

    async open(){
        await super.open("simulator");
    }

    async fillForm(amount: string) {
      await this.accountType.selectOption('ahorros');
      await this.accountNumber.fill('*2243');
      await this.term.selectOption('36');
      await this.monthlyAmount.fill(amount);
      await this.calculateButton.click();
    }
}