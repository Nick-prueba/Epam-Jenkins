import { BasePage } from "./base.page.js";
import { HeaderComponent } from "./components/header.component.js";

export class ProductPage extends BasePage {

    constructor(page) {
        super(page);
        this.headerComponent = new HeaderComponent(page);
    }

    get addToCartBtn() { return this.page.locator("#btn-add-to-cart") }

    async open(productId) {
        await this.page.goto(`/product/${productId}`);
    }
    
    async addProductToCart() {
        await this.addToCartBtn.click();
    }
    
    async goToCart() {
        this.headerComponent.goToHeaderSection("Cart");
    }

    getPopUpMsg() {
        return this.headerComponent.popUpMsg;
    }

}