let btn = document.getElementById('siskiIDrakony');
btn.addEventListener('click', winPopupOpen);

let winPopupContainer = document.getElementById('winPopup__container');

function winPopupOpen() {
    winPopupContainer.classList.remove('winPopupContainer_close');

    setTimeout(winPopupClose, 5000);

}

function winPopupClose() {
    winPopupContainer.classList.add('winPopupContainer_close');
}