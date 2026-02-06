import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignUp extends BasePage{
    readonly inputFirstName: Locator;
    readonly inputLastName: Locator;
    readonly inputDocumentNumber;
    readonly inputEmail: Locator;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly buttonSubmit: Locator;
    readonly messageSuccess: Locator;

    constructor(page: Page){
        super(page);

        this.inputFirstName = page.getByRole("textbox", {name: "First Name"});
        this.inputLastName = page.getByRole("textbox", {name: "Last Name"});
        this.inputEmail = page.getByRole("textbox", {name: "name@example.com"});
        this.inputDocumentNumber = page.getByRole("document", { name: "Document Number" });
        this.inputUsername = page.getByLabel('Nombre de usuario', { exact: true });
        this.inputPassword = page.getByLabel('Contraseña', { exact: true });
        this.buttonSubmit = page.getByRole("button", {name: "Submit"});
        this.messageSuccess = page.getByText("Registro exitoso");
    }

    async open(){
        await super.open("signup");
    }

    async fillCompleteForm(firstName: string, lastName: string, email: string, documentNumber: string, username: string, password: string){
        await this.inputFirstName.fill(firstName);
        await this.inputLastName.fill(lastName);
        await this.inputEmail.fill(email);
        await this.inputDocumentNumber.fill(documentNumber);
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.buttonSubmit.click();
    }
}