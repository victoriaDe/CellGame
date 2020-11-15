export class Player {
    id;
    name;
    iconUrl;
    iconId;
    isWinner = false;
    isPlayerFrozen = false;
    element = document.getElementById('lizard');
    scoreElement = document.querySelector('#player1Div span');
    borderElement = document.querySelector('#player1Div p');

    constructor(name, iconUrl) {
        this.name = name;
        this.iconUrl = iconUrl;
        let refactoredName = 'id_' + name.replace(" ", "");
        this.id = refactoredName;
        this.iconId = "icon_" + refactoredName;
    }
}