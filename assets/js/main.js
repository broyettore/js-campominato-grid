'use strict';

/*************
 * FUNZIONI
 *************/


function createElement(htmlElement, className) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);

    return element;
}

function showColour(element) {
    const buttonSelect = document.querySelectorAll(element);

    buttonSelect.forEach(element => {
        element.addEventListener("click", () => {
                element.classList.toggle("blue");
                console.log(element.innerText);
            })
        })
    };

/*************
 * MAIN
 *************/

const ctnBoard = document.querySelector(".game-board");
const selectMode = document.getElementById("difficulty");
let selectModeValue = selectMode.value;
const playBtn = document.querySelector(".play");
let cellNumber = 100;

for (let i = 1; i <= cellNumber; i++) {
    const createdElement = createElement("div", "game-cell");
    ctnBoard.append(createdElement);
    createdElement.innerText = i;
}



showColour(".game-cell");