import { basePage } from "./base.page";

class checkoutPage extends basePage {

    constructor(page) {
        super(page, "/checkout");
    }

    selectors = {
        "proccedWithPaymentBtn" : "button[data-test='proceed-1']",
        "signInForm" : "#signin-tab"
    }

}

export { checkoutPage };