import abstractView from "./abstractView.js";
import {Constants} from "../constants.js";


export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('Records');
    }

    async getHtml() {
        return ' <h1>Records</h1>' +
            '<div class="award_stands">' +
            `<div class="award_second_place"></div>` +
            '<div class="award_first_place"></div>' +
            `<div class="award_third_place"><p>Бусинка</p><p>${Constants.heart}</p></div>` +
            '</div>';
    }

    init() {
        super.init();
    }

}