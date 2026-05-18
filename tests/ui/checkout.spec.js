import { test, expect } from "../../src/ui/po/index.js";

test.beforeEach(async ({ mainPage }) => {
  await mainPage.open();
});

test.describe("Test checkout functionality", () => {
  test("Login form should appear on checkout when not logged in", async ({
    mainPage,
    productPage,
    checkoutPage,
  }) => {
    await mainPage.goToProduct("CombinationPliers");
    await productPage.addProductToCart();
    await expect(productPage.getPopUpMsg()).toContainText(
      "Product added to shopping cart.",
    );
    await productPage.goToCart();

    await checkoutPage.paymentNextStep();
    await expect(checkoutPage.signInForm).toBeVisible({ timeout: 6000 });
  });
});
