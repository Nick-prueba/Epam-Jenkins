export class headerComponent {

    get popUpMsg () { return $("[role='alert'].toast-message") }
    get goToCartBtn () { return $("[data-test='nav-cart']") }

    async goToCart() {
        await this.goToCartBtn.click();
    }

}