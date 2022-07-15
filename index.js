const gridContainer = document.querySelector(".grid-container");
let col = document.createElement("div");
const createDiv = () => document.createElement("div");
let userInput = 16;
let gridSize = userInput * userInput;
let userColor = "black";
let mode = "Color";
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
		console.log({ mode });
		if (mode == "Color") userColorPicked = colorSelected.value;
		if (mode == "Rainbow") userColorPicked = randomRGBColor();
		if (mode == "Erase") userColorPicked = "transparent";
		square.style.backgroundColor = userColorPicked;
	});
});

let colorSelected = document.getElementById("colorPicker");
let userColorPicked = userColor;

colorSelected.addEventListener("change", () => {
	userColorPicked = colorSelected.value;
});

let colorButton = document.querySelector(".colorMode");

colorButton.addEventListener("click", () => (mode = "Color"));

function randomRGBColor() {
	let r = random255();
	let g = random255();
	let b = random255();
	return `rgb(${r},${g},${b})`;
}

const random255 = () => Math.floor(Math.random() * 255);

let rainbowColor = userColor;
let rainbowMode = document.querySelector(".rainbow");
rainbowMode.addEventListener("click", () => {
	mode = "Rainbow";
});

const erase = document.querySelector(".eraser");
erase.addEventListener("click", () => (mode = "Erase"));

const clearAll = document.querySelector(".clear");

clearAll.addEventListener("click", () => {
	squares.forEach((square) => {
		square.style.backgroundColor = "transparent";
	});
});
