import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('Settings');
    }

    async getHtml() {
        return '<p>Here are some settings</p>';
    }

}