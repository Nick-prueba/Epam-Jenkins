import { test, expect } from '../po/index.js'
import userData from '../testData/userData.json' with { type : 'json' }

test.beforeEach( async ({ loginPage }) => {
    await loginPage.open();
});

test.describe("Test login feature", () => {
    test("Test successful login", async ({ loginPage, accountPage }) => {
        await loginPage.login(userData.validUser.username, userData.validUser.password);
        await expect(accountPage.myAccountTitle).toContainText(/My account/); 
    });
    test("Wrong password should throw error", async ({ loginPage }) => {
        await loginPage.login(userData.validUser.username, userData.invalidUser.password);
        await expect(loginPage.loginErrorMsg).toHaveText("Invalid email or password");
    })
});