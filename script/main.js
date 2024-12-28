//generate grid
const gridPlace = document.querySelector(".grid-container");
// const
let count = 1;
let gridSize = 16;

for (i = 0; i < gridSize; i++) {
  let col = document.createElement("div");
  col.className = `col ${i}`;
  gridPlace.appendChild(col);

  for (j = 0; j < gridSize; j++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.className = `row ${j}`;
    cell.textContent = `${count++}`;
    cell.addEventListener("mouseover", addColor);
    col.appendChild(cell);
  }
}

const createGrid = (gridSize) => {
  gridPlace.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridPlace.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
};

function addColor(event) {
  // let cell = document.querySelector(".cell");
  event.target.classList.add("colored");
}
