import { LoginPage } from "./pages/login.page.js";
import { AccountPage } from "./pages/account.page.js";
import { MainPage } from "./pages/main.page.js";
import { CheckoutPage } from "./pages/checkout.page.js";
import { ProductPage } from "./pages/product.page.js";
import { test as base, expect } from "@playwright/test";

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export { test, expect };
