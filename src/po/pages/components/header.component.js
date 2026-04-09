export class headerComponent {

    get popUpMsg() { return this.page.locator("[role='alert'].toast-message") }

    get goToMainPage() { return this.page.locator("[data-test='nav-home']") }
    get goToCartPage() { return this.page.locator("a[data-test='nav-cart']") }

    get dropdownForAccount() { return this.page.locator("[data-test='nav-menu']") }
    get navigateToFavorites() { return this.page.locator("[data-test='nav-my-favorites']") }

    goToPage(page) {
        this[`goTo${page}Page`].click();
    }

    goToDropdownSection(menu, section) {
        this[`dropdownFor${menu}`].click();
        this[`navigateTo${section}`].click();
    }

    getPopUpMsg() {
        return this.popUpMsg;
    }

}