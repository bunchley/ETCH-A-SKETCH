let gridCells;
let color = "black";
const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear-button");
const resetButton = document.querySelector(".reset-button");
const shadeButton = document.querySelector(".shade-button");

function buildGrid(gridSize) {
  let gridArea = gridSize * gridSize;
  gridContainer.setAttribute(
    "style",
    "grid-template-columns: repeat(" +
      `${gridSize}` +
      ", 1fr); grid-template-rows: repeat(" +
      `${gridSize}` +
      ", 1fr"
  );
  for (i = 0; i <= gridArea; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", i);
    newDiv.setAttribute("class", "cell");
    newDiv.setAttribute("onmouseover", "colorCell()");
    gridContainer.appendChild(newDiv);
  }
  console.log("here");
}

buildGrid(50);

gridCells = document.querySelectorAll(".cell");

resetButton.addEventListener("click", resetScreen);
clearButton.addEventListener("click", clearCellColor);
shadeButton.addEventListener("click", toggleShade);

function toggleShade() {
  if (color === "shade") {
    color = "black";
  } else {
    color = "shade";
  }
}

function colorCell() {
  console.log(color);
  if (color === "shade") {
    let shadeLevel = Number(event.target.style.opacity) + 0.1;
    document.getElementById(event.target.id).classList.add("shade-color");
    document.getElementById(event.target.id).style.opacity = shadeLevel;
    if (
      document.getElementById(event.target.id).classList.contains("color-black")
    ) {
      console.log("hereeerubg");
      document.getElementById(event.target.id).classList.remove("color-black");
      console.log("after black-color removed");
    }
  } else if (color === "black") {
    if (
      document.getElementById(event.target.id).classList.contains("color-black")
    ) {
      document.getElementById(event.target.id).classList.add("color-black");
    }
    document.getElementById(event.target.id).classList.add("color-black");
  } else {
    console.log("not black or shade");
  }
}

function clearCellColor() {
  gridCells.forEach(cell => {
    cell.classList.remove("color-black");
    cell.classList.remove("shade-color");
    // cell.setAttribute("class", "cell");
  });
}

function resetScreen() {
  clearCellColor();
  teardown();
  let userGridSize = parseInt(
    prompt("Please enter grid Size from 16-100: ", "50")
  );

  if (Number.isNaN(userGridSize)) {
    console.log("is not a number");
    alert("Please enter a number within range.");
    buildGrid(50);
  } else if (userGridSize >= 16 && userGridSize <= 100) {
    console.log("is a number between 16 and 100");
    buildGrid(userGridSize);
  } else {
    alert("Please enter a number within range.");
    buildGrid(50);
  }
}
function teardown() {
  console.log("before teardown");
  let cells = document.getElementsByClassName("cell");
  while (cells.length > 0) {
    cells[0].remove();
  }
  console.log("after teardown");
}
