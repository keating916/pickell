let header = document.getElementById('header');
header.style= "display: flex; width: 400px;;"
let button = document.getElementById('clear')
button.style.height = "auto"; 
generateDivs(16);
let newColor = colorGenerator();

document.addEventListener("keyup", e => {
    console.log(e.keyCode)
    if(e.keyCode == 67) {
        newColor = colorGenerator();
    }
});

function colorGenerator() {
    let color ='#'+Math.floor(Math.random()*16777215).toString(16);
    return color
}
function generateDivs(x) {  // create div element for grid
    let container = document.getElementById("container"); //get container element for grid
    container.style.cssText = `display: grid; grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr); height: 400px; width: 400px; border: 1px solid black; padding: auto;`;
    for(let i=0; i<x**2; i++) {
        let grid = document.createElement("div");
        grid.style = `background-color: white`
        grid.className = "gridItems";
        grid.id = i;
        container.appendChild(grid)
    }
    changeColor();
};
function changeColor() {
    let totalGrid = document.getElementsByClassName("gridItems")
    for(let i = 0; i < totalGrid.length; i++) {
        let item = document.getElementById(`${i}`);
        item.addEventListener("mouseover", function() {
            item.style = `background-color: ${newColor}`
        })
    };
};


function removeGrid() {
    let totalGrid = document.getElementsByClassName("gridItems").length
    for(let i = 0; i< totalGrid; i++) {
        el = document.getElementById(`${i}`);
        el.parentNode.removeChild(el);
        console.log(`removed ${i}`);
    }
//removes old grid
}

button.addEventListener('click', e => {
    let input = prompt("How many squares would you like across?");
    input = Number.parseInt(input);
    removeGrid();
    generateDivs(input);
})