function createGrid(size) {
  if (size > 100) {
    return;
  }
  let grid = document.getElementById("etch-grid");
  grid.innerText = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let gridPane = document.createElement("div");
    gridPane.classList.add("grid-pane");
    grid.appendChild(gridPane);
  }

  const gridPanes = document.querySelectorAll(".grid-pane");
  gridPanes.forEach(pane => {
    pane.addEventListener("mouseover", () => {
      pane.style.backgroundColor = "red";
    });
  });
}

createGrid(16);

const sizeButton = document.getElementById("size-button");
sizeButton.addEventListener("click", () => {
  let size = prompt("Enter new grid size (No more than 100):");
  createGrid(size);
});
