import { basePage } from "./base.page";

export class productPage extends basePage {

    constructor(page) {
        super(page);
    }

    get addToCartBtn() { return this.page.locator("#btn-add-to-cart") }
    get linkToCart() { return this.page.locator("a[data-test='nav-cart']") }

    async open(productId) {
        await this.page.goto(`/product/${productId}`);
    }

}