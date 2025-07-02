const main = document.querySelector(".main");
const sketchPad = document.querySelector(".sketch-pad");
const inputColor = document.querySelector("#color-input");
const borderCheckBox = document.querySelector("#check-box");

const defaultGridSize = 10;
let currentColor = "#bccff3";

document.addEventListener("DOMContentLoaded", createGrid);

sketchPad.addEventListener("click", colorBox);
inputColor.addEventListener("input", colorChange);
borderCheckBox.addEventListener("change", borderChange)

function createGrid() {
    for (let i = 0; i < defaultGridSize; i++) {
        const newGridRow = document.createElement("div");
        newGridRow.classList.add("grid-row");
        sketchPad.appendChild(newGridRow);
        for (let j = 0; j < defaultGridSize; j++) {
            const newGridBox = document.createElement("div");
            newGridBox.classList.add("grid-box");
            newGridRow.appendChild(newGridBox);
        }
    }
}

function colorBox(e) {
    currentGridBox = e.target;
    currentGridBox.style.backgroundColor = currentColor;
}

function colorChange() {
    currentColor = inputColor.value;
    console.log(`Selected value: ${currentColor}`);
}

function borderChange() {
    const boxes = document.querySelectorAll(".grid-box");

    boxes.forEach(box => {
        if (borderCheckBox.checked) {
            box.classList.add("border-grid-box");
        } else {
            box.classList.remove("border-grid-box");
        }
    });
}
