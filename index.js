const gridContainer = document.querySelector(".grid-container");
let col = document.createElement("div");
const createDiv = () => document.createElement("div");
let userInput = 16;
let gridSize = userInput * userInput;
let userColor = "black";
// const slider = document.getElementById("myRange");
// let sliderValue = document.querySelector(".sliderValue");

// 	sliderValue.textContent = slider.value;

// slider.oninput = function () {

// 	sliderValue.textContent = this.value;

// };

function createGrid() {
	for (let i = 0; i < gridSize; i++) {
		const gridDiv = document.createElement("div");
		gridDiv.setAttribute(
			"style",

			"box-sizing: border-box; outline: solid black 1px;"
		);

		gridDiv.classList.add("square");
		col.appendChild(gridDiv);
		if (col.childElementCount == userInput) {
			col.classList.add("col");
			gridContainer.appendChild(col);
			col = createDiv();
		}
	}
}
createGrid();

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
	square.addEventListener("mouseover", () => {
		square.style.backgroundColor = userColor;
	});
});

const clearAll = document.querySelector(".clear");

clearAll.addEventListener("click", () => {
	squares.forEach((square) => {
		square.style.backgroundColor = "transparent";
	});
});

const erase = document.querySelector(".eraser");
erase.addEventListener("click", () => {
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {
			square.style.backgroundColor = "transparent";
		});
	});
});
let colorSelected = document.getElementById("colorPicker");

colorSelected.addEventListener("change", () => {
	userColor = colorSelected.value;
});

let colorButton = document.querySelector(".colorMode");

colorButton.addEventListener("click", () => {
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {
			square.style.backgroundColor = userColor;
		});
	});
});

const randomBetween = (min, max) =>
	min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;

let rainbowMode = document.querySelector(".rainbow");
rainbowMode.addEventListener("click", () => {
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {
			square.style.backgroundColor = userColor;
		});
	});
});
