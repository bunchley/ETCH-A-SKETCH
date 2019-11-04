//generate grid
var gridPlace = document.querySelector(".grid-container");
let count = 1;

for (i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  row.textContent = count++;
  gridPlace.appendChild(row);
  for (j = 0; j < 15; j++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = `| ${count++} |`;
    row.appendChild(cell);
  }
}
