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
      cell.className = `row ${j}`;
      cell.textContent = `  `;
      cell.addEventListener("mouseover", addColor);
      // cell.addEventListener("mouseover");
      col.appendChild(cell);
    }
  }
}
function setRandomColor() {
  let color = "#";
  let colorList = "1234567890ABCDEF";
  for (i = 0; i < 6; i++) {
    color += colorList[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addColor(event) {
  if (!this.classList.contains("colored")) {
    this.classList.add("colored");
    this.style.backgroundColor = setRandomColor();
    this.style.opacity = 0.1;
  }
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
