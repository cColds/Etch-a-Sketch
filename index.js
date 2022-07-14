const gridContainer = document.querySelector(".grid-container");
let col = document.createElement("div");
const createDiv = () => document.createElement("div");
let userInput = 16;
let gridSize = userInput * userInput;
let userColor = "blue";
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
let clearMode = clearAll;
clearAll.addEventListener("click", () => {
	if (clearAll == clearMode) squares.style.backgroundColor = "transparent";
});

// const clearAll = document.querySelector(".clear");

// clearAll.forEach((item) => {
// 	clearAll.addEventListener("click", () => {
// 		clearAll.style.backgroundColor = "white";
// 	});
// });

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
