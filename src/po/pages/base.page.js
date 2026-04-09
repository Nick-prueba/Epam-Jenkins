export class basePage {
    
    constructor(page, url) {
        this.page = page;
        this.url = url;
    }

    async open() {
        await this.page.goto(this.url);
    }

}