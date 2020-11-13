import abstractView from "./abstractView.js";
import myFunc from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('New Game');
    }

    async getHtml() {
        return ' GAME';
    }

}