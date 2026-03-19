class basePage {
    
    constructor(page, url) {
        this.page = page;
        this.url = url;
    }

    async open() {
        await this.page.goto(this.url);
    }

    getSelector(name) {
        if(!this.selectors[name]) throw new Error(`Selector ${name} not found in page object.`);

        return this.page.locator(this.selectors[name]);
    }

}

export { basePage };
