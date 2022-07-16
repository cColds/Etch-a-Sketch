const gridContainer = document.querySelector(".grid-container");
let col = document.createElement("div");
const createDiv = () => document.createElement("div");

let userColor = "black";
let mode = "Color";
const slider = document.getElementById("myRange");
let sliderValue = document.querySelector(".sliderValue");
const wrap = document.querySelector(".grid-wrap");
sliderValue.textContent = `${slider.value} x ${slider.value}`;
let userInput = slider.value;

let gridSize = userInput * userInput;
slider.oninput = function () {
	sliderValue.textContent = `${slider.value} x ${slider.value}`;

	userInput = slider.value;
	gridSize = userInput * userInput;
	clearGrid();
	createGrid();

	console.log(userInput);
};

function createGrid() {
	for (let i = 0; i < gridSize; i++) {
		const gridDiv = document.createElement("div");
		gridDiv.setAttribute(
			"style",

			"box-sizing: border-box; outline: solid black 1px;"
		);

		gridDiv.style.width = calculateWidthAndHeight();
		console.log((gridDiv.style.width = calculateWidthAndHeight()));
		gridDiv.style.height = calculateWidthAndHeight();
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

function clearGrid() {
	gridContainer.textContent = "";
}

function calculateWidthAndHeight() {
	return `${500 / slider.value}px`;
}

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
