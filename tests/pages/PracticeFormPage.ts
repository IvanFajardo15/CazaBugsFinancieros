import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PracticeFormPage extends BasePage{
    readonly inputFirstName: Locator;
    readonly inputLastName: Locator;
    readonly inputEmail: Locator;
    readonly radioMale: Locator;
    readonly radioFemale: Locator;
    readonly radioOther: Locator;
    readonly inputMobileNumber: Locator;
    readonly inputDateOfBirth: Locator;
    readonly inputSubjects: Locator;
    readonly checkboxSports: Locator;
    readonly checkboxReading: Locator;
    readonly checkboxMusic: Locator;
    readonly buttonSelectPicture: Locator;
    readonly inputCurrentAddress: Locator;
    readonly selectState: Locator;
    readonly selectCity: Locator;
    readonly buttonSubmit: Locator;
    readonly messageSuccess: Locator;

    constructor(page: Page){
        super(page);

        this.inputFirstName = page.getByRole("textbox", {name: "First Name"});
        this.inputLastName = page.getByRole("textbox", {name: "Last Name"});
        this.inputEmail = page.getByRole("textbox", {name: "name@example.com"});
        this.radioMale = page.getByText('Male', { exact: true });
        this.radioFemale = page.getByText('Female', { exact: true });
        this.radioOther = page.getByText('Other', { exact: true });
        this.inputMobileNumber = page.getByRole("textbox", {name:"Mobile Number"});
        this.inputDateOfBirth = page.locator("#dateOfBirthInput");
        this.inputSubjects = page.locator(".subjects-auto-complete__value-container");
        this.checkboxSports = page.getByText("Sports");
        this.checkboxReading = page.getByText("Reading");
        this.checkboxMusic = page.getByText("Music");
        this.buttonSelectPicture = page.getByRole("button", {name:"Select picture"});
        this.inputCurrentAddress = page.getByRole("textbox", {name:"Current Address"});
        this.selectState = page.getByPlaceholder("Select State");
        this.selectCity = page.getByPlaceholder("Select City");
        this.buttonSubmit = page.getByRole("button", {name: "Submit"});
        this.messageSuccess = page.getByText("Thanks for submitting the form");
    }

    async open(){
        await super.open("automation-practice-form");
    }

    async fillCompleteForm(firstName: string, lastName: string, email: string, mobileNumber: string, dateOfBirth: string, subjects: string, currentAddress: string){
        await this.inputFirstName.fill(firstName);
        await this.inputLastName.fill(lastName);
        await this.inputEmail.fill(email);
        await this.radioMale.click();
        await this.inputMobileNumber.fill(mobileNumber);
        await this.inputDateOfBirth.fill(dateOfBirth);
        await this.inputDateOfBirth.press('Enter');
        await this.inputSubjects.click();
        await this.inputSubjects.type("Maths");
        await this.inputSubjects.press('Enter');
        await this.page.click('body');
        await this.checkboxMusic.click();
        await this.checkboxSports.click();
        await this.checkboxReading.click();
        await this.inputCurrentAddress.fill(currentAddress);
        await this.buttonSubmit.click();
    }

    async fillObligatorieForm(firstName: string, lastName: string, mobileNumber: string){
        await this.inputFirstName.fill(firstName);
        await this.inputLastName.fill(lastName);
        await this.inputMobileNumber.fill(mobileNumber)
        await this.radioFemale.click();
        await this.buttonSubmit.click();
    }

    async checkObligatorieField(locator: Locator){
        await expect(locator).toHaveJSProperty('validity.valid', false); 
    }
}