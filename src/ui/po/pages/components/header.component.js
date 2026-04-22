export class HeaderComponent {
  constructor(page) {
    this.page = page;
  }

  get popUpMsg() {
    return this.page.locator("[role='alert'].toast-message");
  }

  get goToMain() {
    return this.page.locator("[data-test='nav-home']");
  }
  get goToCart() {
    return this.page.locator("a[data-test='nav-cart']");
  }

  get dropdownForAccount() {
    return this.page.locator("[data-test='nav-menu']");
  }
  get goToFavorites() {
    return this.page.locator("[data-test='nav-my-favorites']");
  }

  goToHeaderSection(sectionName) {
    this[`goTo${sectionName}`].click();
  }

  goToDropdownSection(menu, section) {
    this[`dropdownFor${menu}`].click();
    this[`goTo${section}`].click();
  }

  getPopUpMsg() {
    return this.popUpMsg;
  }
}
