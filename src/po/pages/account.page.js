import { basePage } from "./base.page";

class accountPage extends basePage {

    constructor(page) {
        super(page, "/account")
    }

    selectors = {
        "pageTitle" : "h1[data-test='page-title']"
    }
}

export { accountPage };