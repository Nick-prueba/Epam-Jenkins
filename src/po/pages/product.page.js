import { BasePage } from "./base.page";
import { headerComponent } from "./components/header.component";

export class ProductPage extends BasePage {

    constructor() {
        super("/product");
        this.headerComponent = new headerComponent;
    }

    get addToCartBtn () { return $("#btn-add-to-cart") }

    async open(productId) {
        await browser.url(`/product/${productId}`);
    }

    async addProductToCart() {
        await this.addToCartBtn.click();
    }

    async goToCart() {
        await this.headerComponent.goToCart();
    }

}