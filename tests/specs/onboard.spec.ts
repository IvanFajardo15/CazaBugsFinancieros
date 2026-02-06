import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { OnboardingPage } from "../pages/OnboardPage";


test.describe("Suite prueba técnica", () =>{
    let loginPage: LoginPage;
    let onboardingPage: OnboardingPage;

    test.beforeEach(async ({ page }) =>{
        loginPage = new LoginPage(page);
        onboardingPage = new OnboardingPage(page);
        loginPage.open();
    });

    test("Login con credenciales correctas", async()=>{
        await loginPage.Login("Ivan0123", "Prueba.01*");
        await onboardingPage.ValidateFields("Ivan0123");
    });

    test("Login con credenciales incorrectas", async()=>{
        await loginPage.Login("Ivan012", "Prueba.01");
        await loginPage.checkObligatorieField();
    });
});