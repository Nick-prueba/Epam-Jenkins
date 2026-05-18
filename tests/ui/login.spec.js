import { test, expect } from "../../src/ui/po/index.js";
import userData from "../../src/ui/testData/userData.json" with { type: "json" };

test.beforeEach(async ({ loginPage }) => {
  await loginPage.open();
});

test.describe("Test login feature", () => {
  test("Wrong password should throw error", async ({ loginPage }) => {
    await loginPage.login(
      userData.validUser.username,
      userData.invalidUser.password,
    );
    await expect(loginPage.loginErrorMsg).toHaveText(
      "Invalid email or password",
    );
  });
});
