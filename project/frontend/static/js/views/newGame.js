import abstractView from "./abstractView.js";
import {Constants} from "../constants.js";
import {Player} from "../player.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('NewGame');
    }

    async getHtml() {
        return '<div class="playersChoosingAreaWrapper">\n' +
            '    <div id="playersChoosingArea" class="playersChoosingArea">\n' +
            '        <div class="playersChoosingDiv" id="firstPlayer">\n' +
            '            <input type="text" placeholder="Nickname" class="playersChoosingAreaInput">\n' +
            '            <div class="playersChoosingAreaImg">\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="playersChoosingDiv" id="secondPlayer">\n' +
            '            <input type="text" placeholder="Nickname" class="playersChoosingAreaInput">\n' +
            '            <div class="playersChoosingAreaImg">\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="playersChoosingDiv displayNone" id="thirdPlayer">\n' +
            '            <input type="text" placeholder="Nickname" class="playersChoosingAreaInput">\n' +
            '            <div class="playersChoosingAreaImg">\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="playersChoosingDiv displayNone" id="fourthPlayer">\n' +
            '            <input type="text" placeholder="Nickname" class="playersChoosingAreaInput">\n' +
            '            <div class="playersChoosingAreaImg">\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div id="iconsWrapper" class="iconsWrapper"></div>\n' +
            '</div>\n' +
            '<button class="addPlayerButton addRemoveBtn" id="addPlayerButton">+</button>\n' +
            '<button class="removePlayerButton addRemoveBtn" id="removePlayerButton">-</button>\n' +
            '</div>\n' +
            '<div>\n' +
            '    <button class="playersChoosingAreaBtn" id="playersChoosingAreaBtn"><a id="playersChoosingAreaLink" href="/startGame">Ready!</a></button>\n' +
            '</div>';
    }

    init() {
        super.init();

        let iconsWrapper = document.getElementById("iconsWrapper");
        for (let i = 0; i < Constants.images.length; i++) {
            iconsWrapper.innerHTML += '<div class="dropdown">\n' +
                '            <img src="' + Constants.images[i] + '" class=\'player-icon-small\' alt="player-icon">\n' +
                '            <div class="dropdown-content">\n' +
                '                <img src="' + Constants.images[i] + '" class="player-icon-big" alt="icon">\n' +
                '                <p class="check_mark">&#x2714;</p>\n' +
                '            </div>\n' +
                '        </div>\n';
        }

        let activePlayersCount = 2;
        let imgs = document.querySelectorAll('img');
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].setAttribute('draggable', 'false');
        }

        let playersChoosingArea = document.getElementById('playersChoosingArea');
        playersChoosingArea.addEventListener('input', setSubmitButtonState);
        let playersChoosingAreaBtn = document.getElementById('playersChoosingAreaBtn');

        let checkMarks = document.getElementsByClassName('check_mark');
        for (let i = 0; i < checkMarks.length; i++) {
            checkMarks[i].addEventListener('click', () => choosePlayerIcon(checkMarks[i]));
        }

        let addPlayerButton = document.getElementById("addPlayerButton");
        addPlayerButton.addEventListener('click', addPlayer);
        let removePlayerButton = document.getElementById("removePlayerButton");
        removePlayerButton.addEventListener('click', removePlayer);


        function choosePlayerIcon(pElement) {
            let firstActivePlayerWithoutImage = getFirstActivePlayerWithoutImage(); //if there is active player without set image than add selected image to him
            if (firstActivePlayerWithoutImage != null) {
                let playerImageDiv = firstActivePlayerWithoutImage.children[1];

                let parentDiv = pElement.closest('div');
                let chosenImg = parentDiv.firstElementChild;
                let imgRoot = chosenImg.getAttribute('src');
                let newImg = document.createElement('img');
                newImg.setAttribute('src', imgRoot);
                newImg.setAttribute('draggable', 'false');
                newImg.classList.add('playersChoosingAreaImg');
                playerImageDiv.appendChild(newImg);


                let deleteImageCross = document.createElement('div');
                deleteImageCross.classList.add("deleteImg");
                deleteImageCross.textContent = "X";
                playerImageDiv.appendChild(deleteImageCross);
                deleteImageCross.addEventListener('click', () => deletePlayerIcon(deleteImageCross))

                setSubmitButtonState();
            }
        }

        function getFirstActivePlayerWithoutImage() {
            let result = null;
            let playerDivs = playersChoosingArea.children;
            for (let i = 0; i < playerDivs.length; i++) {
                let playerDiv = playerDivs[i];
                if (getComputedStyle(playerDiv).display === "block" && !playerDiv.children[1].innerHTML.includes("img")) {
                    //if player div displayed and has no image - return him
                    return playerDiv;
                }
            }
            return result;
        }

        function setSubmitButtonState() {
            let result = true;
            let playerDivs = playersChoosingArea.children;
            for (let i = 0; i < playerDivs.length; i++) {
                let playerDiv = playerDivs[i];
                if (getComputedStyle(playerDiv).display === "block" && (playerDiv.children[0].value.length === 0 || !playerDiv.children[1].innerHTML.includes("img"))) {
                    //if div displayed and its input is empty or no image was set - disable button
                    result = false;
                }
            }

            if (result === true) {
                playersChoosingAreaBtn.classList.add("open");
                playersChoosingAreaBtn.innerHTML = "<a id=\"playersChoosingAreaLink\" data-link href=\"/startGame\">Ready!</a>";
                Constants.players = buildPlayers(playerDivs);
            } else {
                playersChoosingAreaBtn.classList.remove("open");
                playersChoosingAreaBtn.innerHTML = "Not ready!";
            }
        }

        function buildPlayers(playerDivs) {
            let players = [];
            for (let i = 0; i < playerDivs.length; i++) {
                let playerDiv = playerDivs[i];
                if (getComputedStyle(playerDiv).display === "block") {
                    players.push(new Player(playerDiv.children[0].value, playerDiv.children[1].children[0].getAttribute("src")))
                }
            }
            return players;
        }

        function addPlayer() {
            if (activePlayersCount < 4) {
                playersChoosingArea.children[activePlayersCount].classList.remove("displayNone");
                activePlayersCount++;
                removePlayerButton.classList.add("enabledRemovePlayerButton");
                setSubmitButtonState();
            }
            if (activePlayersCount === 4) {
                addPlayerButton.classList.add("disabledAddPlayerButton");
            }
        }

        function removePlayer() {
            if (activePlayersCount > 2) {
                let playerToBeRemoved = playersChoosingArea.children[activePlayersCount - 1];
                playerToBeRemoved.children[0].value = '';
                playerToBeRemoved.children[1].innerHTML = '';
                playerToBeRemoved.classList.add("displayNone");
                activePlayersCount--;
                addPlayerButton.classList.add("enabledAddPlayerButton");
                setSubmitButtonState();
            }
            if (activePlayersCount === 2) {
                removePlayerButton.classList.add("disabledRemovePlayerButton");
            }
        }

        function deletePlayerIcon(cross) {
            let parent = cross.parentElement;
            parent.innerHTML = '';
            setSubmitButtonState();
        }

    }

}
