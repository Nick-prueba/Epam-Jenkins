import { BasePage } from "./base.page.js";

export class CheckoutPage extends BasePage {

    constructor(page) {
        super(page, "/checkout");
    }

    get proccedWithPaymentBtn() { return this.page.locator("button[data-test='proceed-1']") }
    get signInForm() { return this.page.locator("#signin-tab") }

    async paymentNextStep() {
        this.proccedWithPaymentBtn.click();
    }


}