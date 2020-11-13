let lizard = {
    id: 'lizard',
    isWinner: false,
    isPlayerFrozen: false,
    lives: 4,
    imgSrc: 'lizard.png',
    turn: true,
    name: '',
    element: document.getElementById('lizard'),
    userdata: 'player1Div',
    scoreElement: document.querySelector('#player1Div span'),
    borderElement: document.querySelector('#player1Div p'),
    score: 0,
};

let chicken = {
    id: 'chicken',
    isWinner: false,
    isPlayerFrozen: false,
    lives: 4,
    imgSrc: 'lizard.png',
    turn: true,
    name: '',
    element: document.getElementById('chicken'),
    scoreElement: document.querySelector('#player2Div span'),
    borderElement: document.querySelector('#player2Div p'),
    userdata: 'player2Div',
    score: 0,

};

let maxCellNumber = 25;
let noWinner = true;
let players = [lizard, chicken];
let turn = 0;


let actionsAttributes = {
    coinAudio: document.getElementById('coinAudion'),
    bananaAudio: document.getElementById('bananaAudio'),
    iceAudio: document.getElementById('iceAudio'),
    fireAudio: document.getElementById('fireAudio'),

};
let icePopup = '';           // popupIce
let icePopupContent = '';
let icePopupClose = '';
let iceWaitingPopup = '';
const startBtn = document.getElementById('startBtn');
let questionContainer = document.getElementById('question__popup__container');
let questionContent = document.getElementById('question__popup__content');
let questionBtn;
let questionInput;

startBtn.addEventListener('click', startGame);

function startGame() {
    startBtn.classList.add('disabledStartBtn');
    startBtn.removeEventListener('click', startGame);
    init();
    makeMove(players[turn]);
}

function init() {
    document.getElementById('square0').appendChild(lizard.element);
    document.getElementById('square0').appendChild(chicken.element);
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
    player.score += 10;
    player.scoreElement.textContent = player.score;
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
    passMove(player);
}

function questionPopupOpen(player) {
    questionBtn = document.getElementById('question__btn__Check');
    questionInput = document.getElementById('answer_input');
    questionInput.addEventListener('input', () => checkAnswer(player), {once: true});

    setRandomQuestion();

    questionContainer.classList.remove('closedQuestion__popup__container');
    questionContent.classList.remove('closedQuestion__popup__content');
    questionContainer.classList.add('openQuestion__popup__container');
    questionContent.classList.add('openQuestion__popup__content');
}


function checkAnswer(player) {
    if (questionInput.value.length === 0) {
        questionBtn.removeEventListener('click', () => onSubmit(player), {once: true});
    } else {
        questionBtn.addEventListener('click', () => onSubmit(player), {once: true});
    }
}

function onSubmit(player) {
    if (answerInput.value === correctAnswer) {
        questionContent.innerHTML += '<h2>Correct! +50 coins!</h2>';
        player.score += 50;
    } else {
        questionContent.innerHTML += '<h2>Oops...The correct answer is:<br>' + correctAnswer + '<br>-10 coins!</h2>';
        player.score -= 10;
    }
    setTimeout(questionPopupClose, 4000);

}

function questionPopupClose() {
    questionContainer.classList.add('closedQuestion__popup__container');
    questionContent.classList.add('closedQuestion__popup__content');
    questionContainer.classList.remove('openQuestion__popup__container');
    questionContent.classList.remove('openQuestion__popup__content');
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
        console.log(e);
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



