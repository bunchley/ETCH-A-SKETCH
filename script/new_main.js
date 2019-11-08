const clearButton = document.querySelector(".clear-button");

const createGrid = () => {
  const markup = `<div class="container" id="container" style="display: grid; border: 1px black solid; height: 100%; width: 100%"></div>`;
  document.body.innerHTML += markup;
};

const layoutGrid = gridSize => {
  const container = document.getElementById("container");
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
};

//need to figure out how
const fillGrid = gridSize => {
  const container = document.getElementById("container");
  const test = Array(gridSize * gridSize).keys();
  for (var i of test) {
    let markup = `<div id="card ${i}" class="cell" style="grid-column: (${i %
      gridSize} / span ${gridSize};
    grid-row: ${i} / span ${gridSize};
    border: 1px black solid;">${i}</div>`;
    container.innerHTML += markup;
  }
  const cell = document.querySelectorAll(".cell");
  cell.forEach(mouseEvent => {
    mouseEvent.addEventListener("mouseenter", e => {
      e.target.classList.add("color");
    });
  });
};

function createSketchpad(gridSize) {
  createGrid();
  layoutGrid(gridSize);
  fillGrid(gridSize);
}

createSketchpad(16);
