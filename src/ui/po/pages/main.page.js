import { BasePage } from "./base.page.js";

export class MainPage extends BasePage {
  constructor(page) {
    super(page, "/");
  }

  get productCombinationPliers() {
    return this.page.locator("img[alt='Combination Pliers']");
  }
  get productBoltCutters() {
    return this.page.locator("img[alt='Bolt Cutters']");
  }

  get priceSliderMaxAmount() {
    return this.page.locator(".ngx-slider-pointer-max");
  }
  get priceSliderBar() {
    return this.page.locator(".ngx-slider-full-bar");
  }

  // Function to set the price cap manually using the slide bar
  async setMaxPrice(maxPrice) {
    const slideBar = this.priceSliderBar;
    const box = await slideBar.boundingBox();

    const ratio = maxPrice / 200;
    const targetX = box.x + box.width * ratio;
    const centerY = box.y + box.height / 2;

    await this.priceSliderMaxAmount.hover();
    await this.page.mouse.down();
    await this.page.mouse.move(targetX, centerY);
    await this.page.mouse.up();
  }

  async goToProduct(productName) {
    await this[`product${productName}`].click();
  }
}
