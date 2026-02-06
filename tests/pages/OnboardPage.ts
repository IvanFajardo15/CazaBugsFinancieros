import { Page, Locator, expect } from '@playwright/test';

export class OnboardingPage {
  slideAhorro: Locator;
  menuAhorro: Locator;
  btnSimular: Locator;
  userName: Locator;

  constructor(page: Page) {
    this.slideAhorro = page.getByText('Ahorro Digital');
    this.menuAhorro = page.getByRole('link', { name: 'Ahorro' });
    this.btnSimular = page.getByRole('button', { name: 'Simular' });
    this.userName = page.locator('#user-name');
  }

   async ValidateFields(firstName: string){
        await expect(this.slideAhorro).toBeVisible();
        await expect(this.menuAhorro).toBeVisible();
        await expect(this.btnSimular).toBeVisible();
        await expect(this.userName).toContainText(firstName);
    }
}