let activePlayersCount = 2;
let imgs = document.querySelectorAll('img');
for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('draggable', 'false');
}

let playersChoosingArea = document.getElementById('playersChoosingArea');
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
let removePlayerButton = document.getElementById("removePlayerButton");

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
        deleteImageCross.addEventListener('click', () => deletePlayerIcon(deleteImageCross));

        setSubmitButtonState(playersChoosingArea);
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

function setSubmitButtonState(container) {
    let result = true;
    let playerDivs = container.children;
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
        setSubmitButtonState(playersChoosingArea);
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
        setSubmitButtonState(playersChoosingArea);
    }
    if (activePlayersCount === 2) {
        removePlayerButton.classList.add("disabledRemovePlayerButton");
    }
}

function deletePlayerIcon(cross) {
    console.log(1);
    let parent = cross.parentElement;
    parent.innerHTML = '';
}