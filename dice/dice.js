const rollButton = document.getElementById('rollButton');
const diceFaces = [
    'https://i.ibb.co/CWbx90w/one.png',
    'https://i.ibb.co/F0Tbb38/two.png',
    'https://i.ibb.co/RpMRkhf/three.png',
    'https://i.ibb.co/qjzfC4n/four.png',
    'https://i.ibb.co/2cBtSM8/five.png',
    'https://i.ibb.co/7W42HFD/six.png',

];
let diceImage = document.getElementById('dice');
let audio = document.getElementById('diceAudio');

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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}