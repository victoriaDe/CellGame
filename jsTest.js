/*
let questionContainer = document.getElementById('question__popup__container');
let questionContent = document.getElementById('question__popup__content');
let questionBtn;
let questionInput;
let btn = document.getElementById('siskiIDrakony');
btn.addEventListener('click', () => questionPopupOpen(player));


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
    console.log(player.name);
    if (answerInput.value.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
        questionContent.innerHTML = '<h2>Correct! +50 coins!</h2>';
        player.element
            .score += 50;
    } else {
        questionContent.innerHTML = '<h2>Oops...The correct answer is:<br>' + correctAnswer + '<br>-10 coins!</h2>';
        player.element.score -= 10;
    }
    closeQuestionPopup();
}

function closeQuestionPopup() {
    setTimeout(questionPopupClose, 4000);

}

function questionPopupClose() {
    questionContainer.classList.add('closedQuestion__popup__container');
    questionContent.classList.add('closedQuestion__popup__content');
    questionContainer.classList.remove('openQuestion__popup__container');
    questionContent.classList.remove('openQuestion__popup__content');
}


//----*/
