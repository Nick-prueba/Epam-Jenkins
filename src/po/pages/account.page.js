import { BasePage } from "./base.page";

export class AccountPage extends BasePage {

    constructor() {
        super("/account")
    }

    get pageTitle () { return $("[data-test='page-title']") }

}