import { basePage } from "./base.page";

export class accountPage extends basePage {

    constructor(page) {
        super(page, "/account")
    }

    get myAccountTitle() { return this.page.locator("h1[data-test='page-title']") }
}