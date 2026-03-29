import { BasePage } from "./base.page";

export class CheckoutPage extends BasePage {

    constructor() {
        super("/checkout");
    }

    get proccedWithPaymentBtn () { return $("[data-test='proceed-1']") }
    get signInForm () { return $("#signin-tab") }

    async paymentNextStep() {
        this.proccedWithPaymentBtn.click();
    }

}