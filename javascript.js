const main = document.querySelector(".main");
const sketchPad = document.querySelector(".sketch-pad");
const inputColor = document.querySelector("#color-input");
const borderCheckBox = document.querySelector("#check-box");
const eraser = document.querySelector(".eraser-icon");
const clearCanvas = document.querySelector(".clear-canvas-button");
const gridSizeInput = document.querySelector("#grid-size");

let gridSize = 10; // default 10x10
let currentColor = "#bccff3"; //default color
let erase = false;
let isMouseDown = false;

document.addEventListener("DOMContentLoaded", createGrid);

sketchPad.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    e.preventDefault();
    colorBox(e);
});

sketchPad.addEventListener("mouseup", () => {
    isMouseDown = false;
});

sketchPad.addEventListener("mouseover", colorBox);
inputColor.addEventListener("input", colorChange);
borderCheckBox.addEventListener("change", borderChange)
eraser.addEventListener("click", eraseBox);
clearCanvas.addEventListener("click", clearGrid);

gridSizeInput.addEventListener("change", () => {
    changeGridSize(gridSizeInput.value);
});

function createGrid() {
    console.log
    for (let i = 0; i < gridSize; i++) {
        const newGridRow = document.createElement("div");
        newGridRow.classList.add("grid-row");
        sketchPad.appendChild(newGridRow);
        for (let j = 0; j < gridSize; j++) {
            const newGridBox = document.createElement("div");
            newGridBox.classList.add("grid-box");
            newGridRow.appendChild(newGridBox);
        }
    }
}

function colorBox(e) {
    if (isMouseDown) {
        if (e.target.classList.contains("grid-box")) {
            currentGridBox = e.target;
            
            if (erase) {
                currentGridBox.style.backgroundColor = "#ffffff";
            } else {
                currentGridBox.style.backgroundColor = currentColor;
            }
        }
    }
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

function eraseBox() {
    if (erase) {
        erase = false;
        eraser.style.opacity = "1";
    } else {
        erase = true;
        eraser.style.opacity = "0.7";
    }
}

function clearGrid() {
    sketchPad.innerHTML = "";
    createGrid();
    borderChange();
}

function changeGridSize(size) {
    gridSize = size;
    clearGrid();
}