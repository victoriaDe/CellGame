export default class {
    constructor() {

    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return '';
    }

    init() {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementsByTagName('body')[0].style.paddingTop = '150px';

    };
}

