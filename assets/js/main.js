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

for (let i = 1; i <= 100; i++) {
    const createdElement = createElement("div", "game-cell");
    ctnBoard.append(createdElement);
    createdElement.innerText = i;
}

showColour(".game-cell");

