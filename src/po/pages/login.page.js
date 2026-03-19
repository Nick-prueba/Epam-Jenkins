import { basePage } from "./base.page";

class loginPage extends basePage {

    constructor(page) {
        super(page, "/auth/login");
    }

    selectors = {
        "emailField" : "#email",
        "passwordField" : "#password",
        "submitBtn" : ".btnSubmit",
        "invalidPassErrorMsg" : ".help-block"
    }

    async login(username, password) {
        await this.getSelector("emailField").fill(username);
        await this.getSelector("passwordField").fill(password);
        await this.getSelector("submitBtn").click();
    }

}

export { loginPage };
