import { BasePage } from "./base.page";

export class LoginPage extends BasePage {

    constructor() {
        super("/auth/login");
    }

    get email () { return $("#email") }
    get password () { return $("#password") }
    get submitBtn () { return $(".btnSubmit") }
    get loginErrorMsg () { return $(".help-block") }

    async login(username, password) {
        await this.email.setValue(username);
        await this.password.setValue(password);
        await this.submitBtn.click();
    }

}