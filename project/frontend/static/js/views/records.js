import abstractView from "./abstractView.js";


export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('Records');
    }

    async getHtml() {
        return '<h1>Records</h1>' +
            '<div class="award_stands">' +
            `<div class="award_second_place" id="award_second_place"></div>` +
            `<div class="award_first_place" id="award_first_place"></div>` +
            `<div class="award_third_place" id="award_third_place"></div>` +
            '</div>' +
            '<ol class="award__list" id="award_list">' +
            '</ol>';
    }

    init() {
        super.init();
        let firstPlace = document.getElementById("award_first_place");
        let secondPlace = document.getElementById("award_second_place");
        let thirdPlace = document.getElementById("award_third_place");

        let awardList = document.getElementById("award_list");

        console.log(localStorage.getItem("scoreboardPlayers"));
        let scoreboardPlayers = JSON.parse(localStorage.getItem("scoreboardPlayers"));
        if (scoreboardPlayers == null) {
            return;
        }
        let sortedScoreboardPlayers = scoreboardPlayers.sort(function (player1, player2) {
            return player2.score - player1.score;
        });

        let awardListLength = sortedScoreboardPlayers.length > 10 ? 10 : sortedScoreboardPlayers.length;
        for (let i = 0; i < awardListLength; i++) {
            let player = sortedScoreboardPlayers[i];
            switch (i) {
                case 0:
                    setStandPlayer(firstPlace, player);
                    break;
                case 1:
                    setStandPlayer(secondPlace, player);
                    break;
                case 2:
                    setStandPlayer(thirdPlace, player);
            }
            setListPlayer(player);
        }

        function setStandPlayer(place, player) {
            let name = document.createElement("p");
            name.textContent = player.name;
            let icon = document.createElement("img");
            icon.setAttribute("src", player.iconUrl);

            place.appendChild(name);
            place.appendChild(icon);
        }

        function setListPlayer(player) {
            // awardList;
            let nameAndScore = document.createElement("p");
            nameAndScore.textContent = player.name;
            let score = document.createElement("span");
            score.textContent = player.score;
            let raw = document.createElement('li');

            nameAndScore.appendChild(score);
            raw.appendChild(nameAndScore);

            awardList.appendChild(raw);
        }
    }

}