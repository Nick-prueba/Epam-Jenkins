import { test as base, expect } from '@playwright/test';
import { loginPage, accountPage } from '../po/index'
import userData from '../testData/userData.json' with { type : 'json' }

const test = base.extend({
    loginPage : async ({ page }, use) => {
        await use(new loginPage(page));
    },
    accountPage : async ({ page }, use) => {
        await use(new accountPage(page));
    }
});

test.beforeEach( async ({ loginPage }) => {
    await loginPage.open();
});

test.describe("Test login feature", () => {
    test("Test successful login", async ({ loginPage, accountPage }) => {
        await loginPage.login(userData.validUser.username, userData.validUser.password);

        const accountTitle = await accountPage.getSelector("pageTitle");
        await expect(accountTitle).toContainText(/My account/); 
    });
    test.only("Wrong password should throw error", async ({ loginPage }) => {
        await loginPage.login(userData.validUser.username, userData.invalidUser.password);
        await expect(loginPage.getSelector("invalidPassErrorMsg")).toHaveText("Invalid email or password");
    })
});