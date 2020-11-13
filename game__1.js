/*
let lizard = document.getElementById('lizard');
//let chicken = document.getElementById('chicken');
let gameContainer = document.getElementById('gameContainer');
let startPoint = document.getElementById('startPoint');
const block3 = document.getElementById('square3');


start(lizard);

startPoint.appendChild(lizard);
//startPoint.appendChild(chicken);

//getIconCellId(chicken);

function start(element) {
    let currentDroppable = null;
    element.addEventListener("mousedown", function (e) {
        let shiftX = e.clientX - element.getBoundingClientRect().left;
        let shiftY = e.clientY - element.getBoundingClientRect().top;
        element.style.position = 'absolute';
        element.style.zIndex = '1000';
        document.body.append(element);

        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            element.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            element.hidden = false;

            if (!elemBelow) return;

            if (elemBelow === document.getElementById(getIconCellId(element))) {
                enterDroppable(elemBelow, element);
                elemBelow.appendChild(element);
            }
        }


        document.addEventListener('mousemove', onMouseMove);

        // отпустить мяч, удалить ненужные обработчики
        element.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        };

        element.ondragstart = function () {
            return false;
        };

        function enterDroppable(element, dragEl) {
            // element.style.background = 'pink';
            element.style.border = 'none';
            element.style.background = 'darkslategrey'

        }


    });
}

function getIconCellId(dragEl) {

    if (lizard.parentElement.id !== 'startPoint') {
        let parentID = Number(dragEl.parentNode.id.replace('square', ''));
        let newParentID = 'square' + (parentID + diceNumber);
        console.log(newParentID);
        return newParentID;
    } else {
        let parentID = 1;
        let newParentID = parentID + diceNumber;
        let newParent = document.getElementById('square' + newParentID);
        return 'square' + newParentID;
    }
}*/
