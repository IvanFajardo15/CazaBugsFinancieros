import {test, expect} from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";

test.describe("Suite prueba técnica sección productos", () =>{
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) =>{
        productPage = new ProductPage(page);
        productPage.open();
    });

    test("TC009 Verificar campos de producto", async()=>{
        await productPage.verifyFields("Cuenta de ahorros", "*2243", "01/01/2023", "01/01/2024", "$200.000");
    });

});