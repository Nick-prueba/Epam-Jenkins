import { basePage } from "./base.page";

export class loginPage extends basePage {

    constructor(page) {
        super(page, "/auth/login");
    }

    get emailField() { return this.page.locator("#email") }
    get passwordField() { return this.page.locator("#password") }
    get submitBtn() { return this.page.locator(".btnSubmit") }
    get loginErrorMsg() { return this.page.locator(".help-block") }

    async login(username, password) {
        await this.emailField.fill(username);
        await this.passwordField.fill(password);
        await this.submitBtn.click();
    }

}