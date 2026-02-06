import {test, expect} from "@playwright/test";
import { SignUp } from "../pages/SignUp";



test.describe("Suite prueba técnica sección registro de usuario", () =>{
    let signup: SignUp;

    test.beforeEach(async ({ page }) =>{
        signup = new SignUp(page);
        signup.open();
    });

    test("TC001 Registro de usuario nuevo", async()=>{
        await signup.fillCompleteForm("Ivan", "Prueba", "ivan.prueba@prueba.com", "1234567890", "Ivan0123", "Prueba.01*");
        await expect(signup.messageSuccess).toBeVisible();
    });
});