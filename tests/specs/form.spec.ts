import {test, expect} from "@playwright/test";
import { PracticeFormPage } from "../pages/PracticeFormPage";

test.describe("Suite prueba técnica", () =>{
    let practiceFormPage: PracticeFormPage;

    test.beforeEach(async ({ page }) =>{
        practiceFormPage = new PracticeFormPage(page);
        practiceFormPage.open();
    });

    test("Llenar formulario completo credenciales correctas", async()=>{
        await practiceFormPage.fillCompleteForm("Ivan", "Fajardo", "iafajardoc@gmail.com", "3212534148", "20 Mar 1994", "Maths" , "Prueba");
        await expect(practiceFormPage.messageSuccess).toBeVisible();
    });

    test("Llenar formulario incompleto credenciales correctas", async()=>{
        await practiceFormPage.fillObligatorieForm("Ivan", "Fajardo", "3212534148");
        await expect(practiceFormPage.messageSuccess).toBeVisible();
    });

    test("Validación error campo obligatorio", async()=>{
        await practiceFormPage.fillObligatorieForm("", "Fajardo", "3212534148");
        await practiceFormPage.checkObligatorieField(practiceFormPage.inputFirstName);
    });

    test("Validación multiple error campos obligatorios", async()=>{
        await practiceFormPage.fillObligatorieForm("", "", "");
        await expect.soft(practiceFormPage.inputFirstName).toHaveJSProperty('validity.valid', false);
        await expect.soft(practiceFormPage.inputLastName).toHaveJSProperty('validity.valid', false);
        await expect.soft(practiceFormPage.inputMobileNumber).toHaveJSProperty('validity.valid', false);
    });

    test("Validación longitud campo Mobile Number mayor a 10", async()=>{
        //Este test case es debatible, de acuerdo a que estoy enviando un número de telefono
        //con una longitud superior a la permitida, sin embargo, el campo solamente toma los 
        //primeros 10 dígitos, en un proyecto real se podría abordar de acuerdo a los requerimientos 
        //para saber si se debe mostrar un aviso informativo del campo o algo similar 
        await practiceFormPage.fillObligatorieForm("Ivan", "Fajardo", "3212534148955266");
        await expect(practiceFormPage.messageSuccess).toBeVisible();
    });

    test("Validación longitud campo Mobile Number menor a 10", async()=>{
        await practiceFormPage.fillObligatorieForm("Ivan", "Fajardo", "321253414");
        await practiceFormPage.checkObligatorieField(practiceFormPage.inputMobileNumber);
    });
});