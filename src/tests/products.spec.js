import { test as base, expect } from '@playwright/test';
import { mainPage } from '../po/index'

const test = base.extend({
    mainPage : async ({ page }, use) => {
        await use(new mainPage(page));
    }
});

test.beforeEach( async ({ mainPage }) => {
    await mainPage.open();
});

test.describe("Test product main page", () => {
    test("Products over max price should not appear after setting it to 45", async ({ mainPage }) => {
        await expect(mainPage.getSelector("productBoltCutters")).toBeVisible();
        await mainPage.setMaxPrice(45);
        await expect(mainPage.getSelector("productBoltCutters")).not.toBeVisible();
    });
});