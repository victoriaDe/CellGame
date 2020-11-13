import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return '<h1>Welcome on board!</h1>' +
            ' <div class="main_page">\n' +
            '        <div class="main_page_content">' +
            '<div><img alt = lizard src="../../project/frontend/static/images/lizard.png"></div>' +
            '<div><img alt = tiger src="../../project/frontend/static/images/tiger.png"></div>' +
            '<div><img alt = shark src="../../project/frontend/static/images/shark.png"></div>' +
            '</div>' +
            '<p> Press start in order to start the game' +
            '<a href="/newGame" data-link class="nav__link" onclick="myFunc()">Start</a>' +
            '</p></div>';
    }

}

function myFunc() {
    console.log(1);
}