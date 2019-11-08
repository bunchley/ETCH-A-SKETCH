//generate grid
const gridPlace = document.querySelector(".grid-container");

let count = 1;
let gridSize = 16;

for (i = 0; i < gridSize; i++) {
  for (j = 0; j < gridSize; j++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = `| ${count++} |`;
    gridPlace.appendChild(cell);
    cell.addEventListener("mouseover", addColor);
  }
}

const createGrid = gridSize => {
  gridPlace.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridPlace.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
};

function addColor(event) {
  // let cell = document.querySelector(".cell");
  event.target.classList.add("colored");
}
