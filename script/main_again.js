let gridCells;
const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear-button");

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
    newDiv.setAttribute("onmouseover", "colorCellBlack()");
    gridContainer.appendChild(newDiv);
  }
  console.log("here");
}

buildGrid(50);

gridCells = document.querySelectorAll(".cell");

function colorCellBlack() {
  document.getElementById(event.target.id).setAttribute("class", "color-black");
}
clearButton.addEventListener("click", clearCellColor);
function clearCellColor() {
  gridCells.forEach(cell => {
    cell.classList.remove("color-black");
  });
}
