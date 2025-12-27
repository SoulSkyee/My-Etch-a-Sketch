let currentSize = 9;

// picking the html.
const divContainer = document.querySelector(".container");
const btnMap = document.querySelector(".btnMap");



// adding the button
const btnChange = document.createElement("button");
btnChange.classList.add("btnChange");
btnChange.textContent = "change the grid"

const btnReset = document.createElement("button");
btnReset.classList.add("btnReset");
btnReset.textContent = "empty the grid"

// IMPORTANT - append all of it.
btnMap.appendChild(btnChange);
btnMap.appendChild(btnReset);

// function untuk ganti grid
function addGrid(sizeGrid) {
    divContainer.innerHTML = '';
    divContainer.style.setProperty("--grid-rows", sizeGrid);
    for (let i = 0; i < sizeGrid * sizeGrid; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("square");
        gridDiv.addEventListener("mouseover", () => {
            gridDiv.style.backgroundColor = "red";
        })
        divContainer.appendChild(gridDiv);
    }
}

// IMPORTANT - function yang fungsinya untuk clear grid tanpa ubah grid
function clearGrid() {
    divContainer.innerHTML = '';
}

// TODO - implement button change and reset
btnChange.addEventListener("click", () => {
    const input = prompt("Tulis grid berapa yang kamu mau? jangan banyak-banyak 1 - 16 aja.", 9);
    if (input <= 16) {
        addGrid(input);
    } else {
        alert("Ngawur")
    }
    currentSize = input;
})

btnReset.addEventListener("click", () => {
    clearGrid();
    addGrid(currentSize);
})

// NOTE - Implement changeGrid for beginning
addGrid(currentSize);
