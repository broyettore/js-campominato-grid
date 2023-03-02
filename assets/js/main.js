'use strict';

/*************
 * FUNZIONI
 *************/

// function to create an element with a class
function createElement(htmlElement, className) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);

    return element;
}

// function to select all elements of the same class and adding a click event
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

const ctnBoard = document.querySelector(".game-board"); // selects container
const selectMode = document.getElementById("difficulty"); // selects html select
let selectModeValue = selectMode.value; // selects html select value
const playBtn = document.querySelector(".play"); // selects play button
let cellNumber = 100;

for (let i = 1; i <= cellNumber; i++) {
    const createdElement = createElement("div", "game-cell");
    ctnBoard.append(createdElement);
    createdElement.innerText = i;
}


showColour(".game-cell");