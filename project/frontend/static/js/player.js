export class Player {
    id;
    name;
    iconUrl;
    iconId;
    isPlayerFrozen = false;
    element;
    scoreElement;
    borderElement;

    constructor(name, iconUrl) {
        this.name = name;
        this.iconUrl = iconUrl;
        let refactoredName = 'id_' + name.replace(" ", "").trim();
        this.id = refactoredName;
        this.iconId = "icon_" + refactoredName;
    }
}