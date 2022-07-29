const gridContainer = document.querySelector(".gridContainer");
const gridBorder = document.querySelector(".gridBorder");
let slider = document.querySelector(".slider");
let sliderText = document.querySelector(".sliderText");

let squareDiv = Number(slider.value);
let squareMultiply = squareDiv ** 2;
const squaresRemove = document.querySelectorAll(".squares");

function removeGrid() {
	return (gridBorder.textContent = "");
}

function changeGrid() {
	removeGrid();
	squareDiv = Number(slider.value);
	squareMultiply = squareDiv ** 2;

	gridLoop();

	squareFunction();
}
slider.addEventListener("input", () => {
	sliderText.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
});
slider.addEventListener("change", changeGrid);

function gridLoop() {
	for (let i = 0; i < squareMultiply; i++) {
		const div = document.createElement("div");

		div.style.outline = "1px solid black";
		div.style.width = `${widthHeight()}px`;
		div.style.height = `${widthHeight()}px`;
		div.classList.add("squares");

		gridBorder.appendChild(div);
		gridContainer.appendChild(gridBorder);
	}
}
gridLoop();
// calculate width and height
function widthHeight() {
	return 500 / squareDiv;
}

// selecting buttons
const color = document.querySelector(".color");
const rainbow = document.querySelector(".rainbow");
const greyscale = document.querySelector(".greyscale");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const colorPicker = document.querySelector(".colorPicker");
// default mode and color
let userMode = color;
let colorValue = "#000000";

color.style.border = "solid white 3px";
rainbow.style.border = "solid white 3px";
greyscale.style.border = "solid white 3px";
eraser.style.border = "solid white 3px";
clear.style.border = "solid white 3px";
color.style.background = "black";
userMode.style.color = "white";
let greyscaleValue = 0.1;

// setup event listeners for hover and mode
function squareFunction() {
	let squares = document.querySelectorAll(".squares");
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {
			if (userMode == color) square.style.background = colorPicker.value;
			if (userMode == rainbow) square.style.background = rainbowColor();

			if (userMode == greyscale) {
				if (square.dataset.opacity == undefined) {
					square.dataset.opacity = 0;
				}
				if (square.dataset.opacity >= 0) {
					square.dataset.opacity =
						Number(square.dataset.opacity) + 0.1;

					console.log(Number(square.dataset.opacity));
					square.style.background = `rgb(${0},${0},${0},${
						square.dataset.opacity
					}`;
					console.log(Number(square.dataset.opacity));
				}
			}

			if (userMode == eraser) square.style.background = "transparent";

			clear.addEventListener("click", () => {
				square.style.backgroundColor = "transparent";
			});
		});
	});
}
squareFunction();

colorPicker.addEventListener("change", () => {
	userMode.style.background = "";
	userMode.style.color = "black";
	userMode = color;

	console.log(colorValue);
	color.style.background = "black";
	color.style.color = "white";
});

// color picker and color mode

color.addEventListener("click", () => {
	userMode.style.background = "";
	userMode.style.color = "black";

	userMode = color;
	color.style.background = "black";
	color.style.color = "white";
});

rainbow.addEventListener("click", () => {
	userMode.style.background = "";
	userMode.style.color = "black";
	userMode = rainbow;
	rainbow.style.background = "black";
	rainbow.style.color = "white";
});

// rainbow mode and rainbow function

function random(number) {
	return Math.floor(Math.random() * number);
}
function rainbowColor() {
	return `rgb(${random(255)},${random(255)},${random(255)})`;
}

// greyscale
greyscale.addEventListener("click", () => {
	userMode.style.background = "";
	userMode.style.color = "black";
	userMode = greyscale;
	greyscale.style.background = "black";
	greyscale.style.color = "white";
});

// eraser mode

eraser.addEventListener("click", () => {
	userMode.style.background = "";
	userMode.style.color = "black";
	userMode = eraser;
	eraser.style.background = "black";
	eraser.style.color = "white";
});
