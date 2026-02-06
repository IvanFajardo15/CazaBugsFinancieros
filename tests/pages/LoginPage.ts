import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly buttonSubmit: Locator;

    constructor(page: Page){
        super(page);
        this.inputUsername = page.getByRole("textbox", {name: "username"});
        this.inputPassword = page.getByRole("textbox", {name: "password"});
        this.buttonSubmit = page.getByRole("button", {name: "Submit"});
    }

    async open(){
        await super.open("login");
    }

    async Login(username: string, password: string){
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.buttonSubmit.click();
    }

    async checkObligatorieField(){
        await expect(this.inputUsername).toHaveJSProperty('validity.valid', false); 
        await expect(this.inputPassword).toHaveJSProperty('validity.valid', false); 
    }

}