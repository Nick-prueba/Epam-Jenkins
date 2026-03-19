import { basePage } from "./base.page";

class productPage extends basePage {

    constructor(page) {
        super(page);
    }

    selectors = {
        "addToCartBtn" : "#btn-add-to-cart",
        "linkToCart" : "a[data-test='nav-cart']"
    }

    async open(productId) {
        await this.page.goto(`/product/${productId}`);
    }

}

export { productPage };