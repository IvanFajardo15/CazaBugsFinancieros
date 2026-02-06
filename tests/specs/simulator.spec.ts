import {test, expect} from "@playwright/test";
import { SimulatorPage } from "../pages/SimulatorPage";
import { SignUp } from "../pages/SignUp";



test.describe("Suite prueba técnica sección simulador de ahorro", () =>{
    let simulatorPage: SimulatorPage;
    const invalidAmounts = ['0', 'ASDA', '*¨*¨'];

    test.beforeEach(async ({ page }) =>{
        simulatorPage = new SimulatorPage(page);
        simulatorPage.open();
    });

    for(const amount of invalidAmounts){
    test(`TC005 Simular ahorro con monto inválido ${amount}`, async()=>{
        await simulatorPage.fillForm(amount);
        await expect(simulatorPage.errorMessage).toBeVisible();
    });}
});