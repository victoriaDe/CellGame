import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('Settings');
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
            '    <div class="iconsWrapper">\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/sheep.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/sheep.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/owl.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/owl.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/shark.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/shark.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/swan.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/swan.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/rat.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/rat.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/turtle.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/turtle.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/bat.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/bat.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/bear.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/bear.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/bee.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/bee.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/bull.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/bull.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/cat.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/cat.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/cow.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/cow.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/crab.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/crab.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/crocodile.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/crocodile.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/deer.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/deer.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/dolphin.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/dolphin.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/duck.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/duck.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/eagle.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/eagle.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/elephant.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/elephant.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/fish.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/fish.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/giraffe.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/giraffe.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/goat.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/goat.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/hippo.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/hippo.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/horse.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/horse.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/kangaroo.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/kangaroo.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/koala.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/koala.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/lizard.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/lizard.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/lobster.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/lobster.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/monkey.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/monkey.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/mouse.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/mouse.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/octopus.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/octopus.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/penguin.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/penguin.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/pig.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/pig.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/rabbit.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/rabbit.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/raccoon.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/raccoon.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/snail.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/snail.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/squirrel.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/squirrel.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/tiger.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/tiger.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/wolf.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/wolf.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '\n' +
            '        <div class="dropdown">\n' +
            '            <img src="images/chicken.png" class=\'player-icon-small\' alt="player-icon">\n' +
            '            <div class="dropdown-content">\n' +
            '                <img src="images/chicken.png" class="player-icon-big" alt="icon">\n' +
            '                <p class="check_mark">&#x2714;</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<button class="addPlayerButton addRemoveBtn" id="addPlayerButton">+</button>\n' +
            '<button class="removePlayerButton addRemoveBtn" id="removePlayerButton">-</button>\n' +
            '</div>\n' +
            '<div>\n' +
            '    <button class="playersChoosingAreaBtn" id="playersChoosingAreaBtn">Ready!</button>\n' +
            '</div>';
    }

    init() {
        let activePlayersCount = 2;
        let imgs = document.querySelectorAll('img');
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].setAttribute('draggable', 'false');
        }

        let playersChoosingArea = document.getElementById('playersChoosingArea');
        playersChoosingArea.addEventListener('input', setSubmitButtonState);
        let playersChoosingAreaBtn = document.getElementById('playersChoosingAreaBtn');
//TODO uncomment when ready
// playersChoosingAreaBtn.addEventListener('click', function () {
//   startBtn.addEventListener('click', startGame);
//})
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
            result === true ? playersChoosingAreaBtn.classList.add("open") : playersChoosingAreaBtn.classList.remove("open");
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
        }
    }

}
