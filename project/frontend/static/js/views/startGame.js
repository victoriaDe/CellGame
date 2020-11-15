import abstractView from "./abstractView.js";
import {Constants} from "./constants.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle('StartGame');
    }

    async getHtml() {
        return '<div class="iconsWrapper">\n' +
            '    <div class="game__container">\n' +
            '        <div id="square6" class="cell question"></div>\n' +
            '        <div id="square5" class="cell money"></div>\n' +
            '        <div id="square4" class="cell ice"></div>\n' +
            '        <div id="square3" class="cell money"></div>\n' +
            '        <div id="square2" class="cell banana"></div>\n' +
            '        <div id="square1" class="cell money"></div>\n' +
            '        <div id="square0" class="cell"></div>\n' +
            '\n' +
            '        <div id="square7" class="cell money"></div>\n' +
            '        <div id="square8" class="cell money"></div>\n' +
            '        <div id="square9" class="cell money"></div>\n' +
            '        <div id="square10" class="cell banana"></div>\n' +
            '        <div id="square11" class="cell money"></div>\n' +
            '        <div id="square12" class="cell ice"></div>\n' +
            '        <div class="empty"></div>\n' +
            '\n' +
            '        <div id="square18" class="cell money"></div>\n' +
            '        <div id="square17" class="cell ice"></div>\n' +
            '        <div id="square16" class="cell money"></div>\n' +
            '        <div id="square15" class="cell banana"></div>\n' +
            '        <div id="square14" class="cell question"></div>\n' +
            '        <div id="square13" class="cell money"></div>\n' +
            '        <div class="empty"></div>\n' +
            '\n' +
            '        <div id="square19" class="cell money"></div>\n' +
            '        <div id="square20" class="cell banana"></div>\n' +
            '        <div id="square21" class="cell money"></div>\n' +
            '        <div id="square22" class="cell question"></div>\n' +
            '        <div id="square23" class="cell money"></div>\n' +
            '        <div id="square24" class="cell money"></div>\n' +
            '        <div id="square25" class="end_point cell"></div>\n' +
            '    </div>\n' +
            '    <div class="icon_player_container" id="iconContainer">\n' +
            /*'        <div id="player1Div">\n' +
            '            <p>Lizard</p>\n' +
            '            <p>Score: <span>0</span></p>\n' +
            '            <img src="lizard.png" id="lizard" alt=\'lizard\' draggable="false" class="icon firstPlayer">\n' +
            '        </div>\n' +
            '        <div id="player2Div">\n' +
            '            <p>Chicken</p>\n' +
            '            <p>Score: <span>0</span></p>\n' +
            '            <img src="chicken.png" id="chicken" alt=\'chicken\' draggable="false" class="icon secondPlayer">\n' +
            '        </div>\n' +*/
            '        <div class="startBtn" id="startBtn"><p>Start</p></div>\n' +
            '        <div class="dice__wrapper">\n' +
            '            <img src="https://i.ibb.co/gWwgM5v/unknown.png" alt="unknown" id="dice">\n' +
            '            <div class="roll_button" id="rollButton">Roll</div>\n' +
            '            <audio src="https://bit.ly/dice-sound" id="diceAudio"></audio>\n' +
            '        </div>\n' +
            '        <audio src="coinSound.mp3" id="coinAudion"></audio>\n' +
            '        <audio src="iceSound.mp3" id="iceAudio"></audio>\n' +
            '        <audio src="bananaSound.mp3" id="bananaAudio"></audio>\n' +
            '    </div>\n' +
            '\n' +
            '</div>\n' +
            '<div class="ice__popup__container icePopupClosed" id="ice__popup__container">\n' +
            '    <div class="ice__popup__body">\n' +
            '        <div class="ice__popup__content icePopupContentClosed" id="ice__popup__content">\n' +
            '            <h2>OOPsss...It\'s an Ice Cube!</h2>\n' +
            '            <p>You have to skip next move, thus your opponent should roll twice while waiting for you!</p>\n' +
            '            <div><p class="closePopup">ok</p></div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '\n' +
            '<div class="iceWaiting__popup__container tri-right right-top closed" id="iceWaiting__popup__container">\n' +
            '    <div class="iceWaiting__popup__body">\n' +
            '        <div class="iceWaiting__popup__content" id="iceWaiting__popup__content">\n' +
            '            <p>Still waiting</p>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="question__popup__container closedQuestion__popup__container" id="question__popup__container">\n' +
            '    <div class="question__popup__body">\n' +
            '        <div class="question__popup__content closedQuestion__popup__content" id="question__popup__content">\n' +
            '            <div id="question_card">\n' +
            '                <h2 id="question"></h2>\n' +
            '                <input type="text" placeholder="Your answer" id="answer_input">\n' +
            '                <div class="question__btn__ok" id="question__btn__Check"><p>Check</p></div>\n' +
            '            </div>\n' +
            '            <div class="question__result" id="question__result"></div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
    }

    init() {
        let players = Constants.players;

        let playersContainer = document.getElementById("iconContainer");
        for (let i = 0; i < players.length; i++) {
            let player = players[i];
            let playerDiv = document.createElement("div");
            playerDiv.setAttribute("id", player.id);

            let nameP = document.createElement("p");
            nameP.textContent = player.name;

            let scoreP = document.createElement("p");
            let scoreSpan = document.createElement("span");
            scoreP.textContent = "Score: ";
            scoreSpan.textContent = 0;
            scoreP.appendChild(scoreSpan);

            let playerIcon = document.createElement("img");
            playerIcon.setAttribute("src", player.iconUrl);
            playerIcon.setAttribute("id", player.iconId);
            playerIcon.setAttribute("draggable", "false");
            playerIcon.classList.add("icon");

            playerDiv.appendChild(nameP);
            playerDiv.appendChild(scoreP);
            playerDiv.appendChild(playerIcon);

            /*playersContainer.innerHTML += '<div id="' + player.id + '">\n' +
                '            <p>' + player.name + '</p>\n' +
                '            <p>Score: <span>0</span></p>\n' +
                '            <img src="' + player.iconUrl + '" id="' + player.iconId + '" alt=\'icon\' draggable="false" class="icon">\n' +
                '</div>\n';*/
            player.element = playerIcon;
            player.scoreElement = scoreSpan;
            player.borderElement = nameP;

            playersContainer.appendChild(playerDiv);
        }

        let maxCellNumber = 25;
        let noWinner = true;
        let turn = 0;

        //dice
        let rollButton = document.getElementById('rollButton');
        let diceImage = document.getElementById('dice');
        let audio = document.getElementById('diceAudio');
        let diceFaces = [
            'https://i.ibb.co/CWbx90w/one.png',
            'https://i.ibb.co/F0Tbb38/two.png',
            'https://i.ibb.co/RpMRkhf/three.png',
            'https://i.ibb.co/qjzfC4n/four.png',
            'https://i.ibb.co/2cBtSM8/five.png',
            'https://i.ibb.co/7W42HFD/six.png',
        ];

        //questions
        let questionContainer = document.getElementById('question__popup__container');
        let questionContent = document.getElementById('question__popup__content');
        let questionBtn = document.getElementById('question__btn__Check');
        let questionInput = document.getElementById('answer_input');
        let questionElement = document.getElementById('question');
        let answerInput = document.getElementById('answer_input');

        //sounds
        let actionsAttributes = {
            coinAudio: document.getElementById('coinAudion'),
            bananaAudio: document.getElementById('bananaAudio'),
            iceAudio: document.getElementById('iceAudio'),
            fireAudio: document.getElementById('fireAudio'),
        };

        // icePopup
        let icePopup = '';
        let icePopupContent = '';
        let icePopupClose = '';
        let iceWaitingPopup = '';
        const startBtn = document.getElementById('startBtn');
        startBtn.addEventListener('click', startGame);


        function startGame() {
            startBtn.classList.add('disabledStartBtn');
            startBtn.removeEventListener('click', startGame);
            initElements();
            makeMove(players[turn]);
        }

        function initElements() {
            let startCell = document.getElementById('square0');
            for (let i = 0; i < players.length; i++) {
                startCell.appendChild(players[i].element);
            }
            icePopup = document.getElementById('ice__popup__container');           // popupIce
            icePopupContent = document.getElementById('ice__popup__content');
            icePopupClose = document.querySelector('.closePopup');
        }

        function makeMove(player) {
            if (!player.isPlayerFrozen) {
                highlightUserCell(player);
                rollButton.addEventListener('click', function waitForRoll() {
                    let diceNumber = rollDice();
                    rollButton.removeEventListener('click', waitForRoll);
                    continueMoveAfterRoll(player, diceNumber);
                });
            } else {
                player.isPlayerFrozen = false;
                passMove(player);
                frozenPopupWait();
            }
        }

        function continueMoveAfterRoll(player, diceNumber) {
            player.element.draggable = true;
            let currentCellId = player.element.parentElement.id;
            let nextCellNumber = parseInt(currentCellId.substr(6)) + diceNumber;
            if (nextCellNumber >= maxCellNumber) {
                player.isWinner = true;
                noWinner = false;
                nextCellNumber = maxCellNumber;
            }
            let nextCellId = currentCellId.substr(0, 6) + nextCellNumber;
            let nextCell = document.getElementById(nextCellId);
            highlightNextCell(nextCell);
            prepareNextCellToDrop(player, nextCell);
        }

        function prepareNextCellToDrop(player, nextCell) {
            nextCell.addEventListener('drop', function waitForDrop() {
                nextCell.removeEventListener('drop', waitForDrop);
                nextCell.removeEventListener("dragover", waitForEnter);
                lowLightNextCell(nextCell);
                nextCell.appendChild(player.element);
                player.element.draggable = false;
                activateCellEvent(player, nextCell);

            });
            nextCell.addEventListener("dragover", waitForEnter);
        }

        function activateCellEvent(player, cell) {
            let classList = cell.classList;
            let action = classList.value.replace('cell ', '');
            switch (action) {
                case 'money':
                    actionMoney(player);
                    break;
                case 'question':
                    actionQuestion(player);
                    break;
                case 'ice':
                    actionIce(player);
                    break;
                case 'banana':
                    actionBanana(player, cell);
                    break;
            }
        }

        function passMove(player) {
            lowLightUserCell(player);
            turn = turn + 1 >= players.length ? 0 : turn + 1;
            makeMove(players[turn]);
        }


        function actionMoney(player) {
            player.scoreElement.textContent = player.scoreElement.textContent * 1 + 10;
            actionsAttributes.coinAudio.play();
            passMove(player);
        }

        function actionBanana(player, currentCell) {
            actionsAttributes.bananaAudio.play();
            let currentCellId = currentCell.id;
            let nextCellNumber = parseInt(currentCellId.substr(6)) + 2;
            if (nextCellNumber >= maxCellNumber) {
                player.isWinner = true;
                noWinner = false;
                nextCellNumber = maxCellNumber;
            }
            let nextCellId = currentCellId.substr(0, 6) + nextCellNumber;
            let nextCell = document.getElementById(nextCellId);
            nextCell.appendChild(player.element);
            activateCellEvent(player, nextCell);
        }

        function actionIce(player) {
            actionsAttributes.iceAudio.play();
            frozenPopup(player);

        }

        function frozenPopupWait() {
            iceWaitingPopup = document.getElementById('iceWaiting__popup__container');
            iceWaitingPopupOpen();
        }

        function iceWaitingPopupOpen() {
            iceWaitingPopup.classList.remove('closed');
            iceWaitingPopup.classList.add('opened');

            setTimeout(closeIceWaitingPopup, 4000);
        }

        function closeIceWaitingPopup() {
            iceWaitingPopup.classList.remove('opened');
            iceWaitingPopup.classList.add('closed');

        }

        function actionQuestion(player) {
            questionPopupOpen(player);
        }

        function questionPopupOpen(player) {
            questionContainer.classList.remove('closedQuestion__popup__container');
            questionContent.classList.remove('closedQuestion__popup__content');
            questionContainer.classList.add('openQuestion__popup__container');
            questionContent.classList.add('openQuestion__popup__content');
            document.getElementById('question_card').classList.remove('question_card_invisible');

            setRandomQuestion();
            questionInput.addEventListener('input', () => checkAnswer(player), {once: true});
        }


        function checkAnswer(player) {
            if (questionInput.value.length === 0) {
                questionBtn.removeEventListener('click', () => onSubmit(player));
            } else {
                questionBtn.addEventListener('click', () => onSubmit(player), {once: true});
            }
        }

        let cardResult = document.getElementById('question__result');

        function onSubmit(player) {
            document.getElementById('question_card').classList.add('question_card_invisible');

            if (isCorrect(answerInput.value)) {
                cardResult.innerHTML = '<h2>Correct! +50 coins!</h2>';
                player.scoreElement.textContent = player.scoreElement.textContent * 1 + 50;

            } else {
                cardResult.innerHTML = '<h2>Oops...The correct answer is:<br>' + shownAnswers + '<br>-10 coins!</h2>';
                player.scoreElement.textContent = player.scoreElement.textContent - 10;

            }
            closeQuestionPopup(player);
        }

        function closeQuestionPopup(player) {
            setTimeout(() => questionPopupClose(player), 4000);
        }

        function questionPopupClose(player) {
            questionContainer.classList.add('closedQuestion__popup__container');
            questionContent.classList.add('closedQuestion__popup__content');
            questionContainer.classList.remove('openQuestion__popup__container');
            questionContent.classList.remove('openQuestion__popup__content');
            cardResult.innerHTML = '';
            questionInput.value = '';
            passMove(player);
        }

        function waitForEnter(event) {
            event.preventDefault();
        }


        function highlightNextCell(nextCell) {
            nextCell.style.border = '4px solid gold';
        }

        function lowLightNextCell(nextCell) {
            nextCell.style.border = '2px solid white';
        }

        function highlightUserCell(player) {
            player.borderElement.style.border = '2px solid magenta';
        }

        function lowLightUserCell(player) {
            player.borderElement.style.border = 'none';
        }

        function winPopup() {

        }

        function frozenPopup(player) {
            icePopup.classList.remove('icePopupClosed');
            icePopup.classList.add('icePopupOpen');

            icePopupContent.classList.remove('icePopupContentClosed');
            icePopupContent.classList.add('icePopupContentOpen');

            player.isPlayerFrozen = true;

            let clickHandler = closePopupAndPassMoveOnClick;
            let escHandler = closePopupAndPassMoveOnEsc;

            icePopupClose.addEventListener('click', clickHandler);
            document.addEventListener('keydown', escHandler);

            function closePopupAndPassMoveOnClick() {
                closePopupAndPassMove();
            }

            function closePopupAndPassMoveOnEsc(e) {
                if (e.which === 27) {
                    closePopupAndPassMove();
                }
            }

            function closePopupAndPassMove() {
                icePopup.classList.remove('icePopupOpen');
                icePopup.classList.add('icePopupClosed');

                icePopupContent.classList.add('icePopupContentClosed');
                icePopupContent.classList.remove('icePopupContentOpen');

                passMove(player);
                icePopupClose.removeEventListener('click', clickHandler);
                document.removeEventListener('keydown', escHandler);
            }
        }

        //DICE
        function rollDice() {
            let diceNumber = getRandomInt(1, 6);
            audio.currentTime = 0;
            diceImage.style.animation = "spinDice 0.25s";
            setTimeout(function () {
                diceImage.setAttribute("src", diceFaces[diceNumber - 1]);
            }, 100);
            setTimeout(stopDiceAnimation, 250);
            audio.play();
            return diceNumber;
        }

        function stopDiceAnimation() {
            diceImage.style.animation = "none";
        }

        //QUESTIONS


        //COMMON

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }


    }
}