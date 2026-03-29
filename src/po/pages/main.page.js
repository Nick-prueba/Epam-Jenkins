import { BasePage } from "./base.page";

export class MainPage extends BasePage {

    constructor() {
        super("/");
    }

    get productCombinationPliers () { return $("img[alt='Combination Pliers']") }

    async goToProduct(productName) {
        await this[`product${productName}`].click();
    }

}