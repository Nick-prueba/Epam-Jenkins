import { basePage } from "./base.page";

class mainPage extends basePage {

    constructor(page) {
        super(page, "/");
    }

    selectors = {
        "productCombinationPliers" : "img[alt='Combination Pliers']",
        "productBoltCutters" : "img[alt='Bolt Cutters']",

        "ngxSliderMax" : ".ngx-slider-pointer-max",
        "ngxSliderBar" : ".ngx-slider-full-bar"
    }

    async setMaxPrice(maxPrice) {
        const slideBar = this.getSelector("ngxSliderBar");
        const box = await slideBar.boundingBox();

        const ratio = maxPrice / 200;
        const targetX = box.x + box.width * ratio;
        const centerY = box.y + box.height / 2;

        await this.getSelector("ngxSliderMax").hover();
        await this.page.mouse.down();
        await this.page.mouse.move(targetX, centerY);
        await this.page.mouse.up();
    }

}

export { mainPage };