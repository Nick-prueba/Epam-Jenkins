import { test, expect } from "../../ui/po/index.js";

test.beforeEach(async ({ mainPage }) => {
  await mainPage.open();
});

test.describe("Test product main page", () => {
  test("Products over max price should not appear after setting it to 45", async ({
    mainPage,
  }) => {
    await expect(mainPage.productBoltCutters).toBeVisible();
    await mainPage.setMaxPrice(45);
    await expect(mainPage.productBoltCutters).not.toBeVisible();
  });
});
