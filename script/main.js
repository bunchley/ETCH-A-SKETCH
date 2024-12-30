//generate grid
const gridPlace = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset-button");
let count = 1;

function createGrid(gridSize) {
  for (i = 0; i < gridSize; i++) {
    let col = document.createElement("div");
    col.className = `col ${i}`;
    gridPlace.appendChild(col);

    for (j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.className = `row ${j}`;
      cell.textContent = `  `;
      cell.addEventListener("mouseover", addColor);
      // cell.addEventListener("mouseover");
      col.appendChild(cell);
    }
  }
}

function addColor(event) {
  event.target.classList.add("colored");
}

resetButton.addEventListener("click", (event) => {
  let newGridSize = parseInt(
    prompt("What is the grid size you'd like (max 100)")
  );
  if (newGridSize > 100) {
    newGridSize = 100;
  }
  gridPlace.innerHTML = "";
  createGrid(newGridSize);
});

createGrid(16);
