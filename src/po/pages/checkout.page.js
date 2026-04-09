import { basePage } from "./base.page";

export class checkoutPage extends basePage {

    constructor(page) {
        super(page, "/checkout");
    }

    get proccedWithPaymentBtn() { return this.page.locator("button[data-test='proceed-1']") }
    get signInForm() { return this.page.locator("#signin-tab") }

}