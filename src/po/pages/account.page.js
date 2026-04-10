import { BasePage } from "./base.page.js";

export class AccountPage extends BasePage {

    constructor(page) {
        super(page, "/account")
    }

    get myAccountTitle() { return this.page.locator("h1[data-test='page-title']") }
}