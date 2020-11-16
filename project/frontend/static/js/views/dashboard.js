import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return '<h1>Welcome on board!</h1>' +
            ' <div class="main_page">\n' +
            ' <div class="main_page_content">' +
            '<div><img alt = lizard draggable="false" src="https://i.ibb.co/zJqchfb/shark.png"></div>' +
            '<div><img alt = tiger draggable="false" src="https://i.ibb.co/QXpWNxT/octopus.png"></div>' +
            '<div><img alt = shark draggable="false" src="https://i.ibb.co/QkM43rR/banana1.png"></div>' +
            '</div>' +
            '<p> Press start in order to start the game' +
            '<a href="/newGame" data-link class="nav__link">Start</a>' +
            '</p></div>';
    }

    init() {
        super.init();
    }
}