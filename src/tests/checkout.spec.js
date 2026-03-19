import { test as base, expect } from '@playwright/test';
import { mainPage, checkoutPage, productPage } from '../po/index'

const test = base.extend({
    mainPage : async ({ page }, use) => {
        await use(new mainPage(page));
    },
    checkoutPage : async ({ page }, use) => {
        await use(new checkoutPage(page));
    }, 
    productPage : async ({ page }, use) => {
        await use(new productPage(page));
    }
});

test.beforeEach( async ({ mainPage }) => {
    await mainPage.open();
});

test.describe("Test checkout functionality", () => {
    test("Login form should appear on checkout when not logged in", async ({ mainPage, productPage, checkoutPage }) => {
        await mainPage.getSelector("productCombinationPliers").click();
        await productPage.getSelector("addToCartBtn").click();
        await productPage.getSelector("linkToCart").click();

        await checkoutPage.getSelector("proccedWithPaymentBtn").click();
        await expect(checkoutPage.getSelector("signInForm")).toBeVisible()
    });
});