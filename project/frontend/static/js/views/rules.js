import abstractView from "./abstractView.js";
import {Constants} from "./constants.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('Rules');
    }

    async getHtml() {
        return '<h1>Rules</h1>' +
            '<div class="list">' +
            '<ul class="rule__list">' +
            `<li><p>${Constants.ridoactive}</p></li>` +
            `<li><span>${Constants.done}</span> Choose number of players (from 1 to 3)</li>` +
            `<li><span>${Constants.done}</span> Add your nickname(s)</li>` +
            `<li><span>${Constants.done}</span> Press the button to submit</li>` +
            `<li><p>${Constants.heart} ${Constants.heart} ${Constants.heart} ${Constants.heart}</p> </li>` +
            '<li> Every player has 4 hearts in the beginning: those are the player\'s lives. As far as a player has at least one heart, the competition is going on. ' +
            'No hearts - you\'ve lost. Be aware of fire and ice!</li>' +
            `<li><p>${Constants.fire}</p></li>` +
            '<li>If you are at a fire\'s place...see you in the very first step and forget about your coins.</li>' +
            `<li><p>${Constants.ice}</p></li>` +
            '<li>You may need to ask your friends to play faster, \'cause you cannot move till the end of a round</li>' +
            `<li><p>${Constants.banana}</p></li>` +
            '<li>Everybody knows what happens when someone is standing right up the banana...Be aware of fire and ice!</li>' +
            `<li><p>${Constants.question}</p></li>` +
            '<li>Simple question - easy money!</li>' +
            `<li><p>${Constants.money}</p></li>` +
            '<li>Here we go! Finally, have some good news: if you are on the same square with the bag, you\'ve earned some coins! Congratulations!</li>' +
            '</ul>' +
            '</div>';
    }

}