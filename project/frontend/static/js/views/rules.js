import abstractView from "./abstractView.js";
import {Constants} from "../constants.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('Rules');
    }

    async getHtml() {
        return '<h1 class="rulesH1">Rules</h1>' +
            '<div class="list">' +
            '<ul class="rule__list">' +
            `<li><p>${Constants.ridoactive}</p></li>` +
            `<li><span>${Constants.done}</span> Choose number of players (from 2 to 4)</li>` +
            `<li><span>${Constants.done}</span> Add your nicknames and icons</li>` +
            `<li><span>${Constants.done}</span> Press the button to submit</li>` +
            `<li><p>${Constants.ice}</p></li>` +
            '<li>You may need to ask your friends to play faster, \'cause you cannot move till the end of a round</li>' +
            `<li><p>${Constants.banana}</p></li>` +
            '<li>Everybody knows what happens when someone is standing right up the banana...Be aware of ice!</li>' +
            `<li><p>${Constants.question}</p></li>` +
            '<li>Simple question - easy money!</li>' +
            `<li><p>${Constants.money}</p></li>` +
            '<li>Here we go! Finally, have some good news: if you are on the same square with a coin, you\'ve earned some money! Congratulations!</li>' +
            '<li><span>Please note, the developer is not responsible for your mental health</span></li>' +
            '</ul>' +
            '</div>';
    }

    init() {
        super.init();
    }

}