const container = document.querySelector('.container');
const containerHeight = 400;
const containerWidth = 400;
let colorMode = "default";

let drawmode = "drawmode";

let drawToggle = document.getElementById('draw-toggle');


drawToggle.addEventListener('click',() => {

    if (drawToggle.checked === false) {

        drawmode = "drawmode"; 
        
    }
    else if (drawToggle.checked === true){
        drawmode = "erasemode";
    } 
});


function resetDrawMode () {
    drawToggle.checked = false;
    drawmode = "drawmode";
    colorMode = "default";
}

function resetColorMode(){
    colorMode = "default";
}



let createdPixels = document.querySelectorAll('.pixel');
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function draw (e) {
    
    let colorPick = document.getElementById('color-pick').value;
    
    if (e.type === 'mouseover' && !mouseDown) return

    if (drawmode === "drawmode" && colorMode === "default" ) {
        e.target.style.backgroundColor = colorPick;
    }
    else if (drawmode === "drawmode" && colorMode === "rainbow" ) {
        console.log("magic rainbowmode!");
        e.target.style.backgroundColor = "#000000";
        
    }
    else if (drawmode === "erasemode") {
        e.target.style.backgroundColor = "#FFFFFF";
    }
    
}



function createGrid () {
    resetDrawMode();
    clearGrid();
    let rowFrag = document.createDocumentFragment();
    let gridSize = document.getElementById('set-size').value;
    
    for (let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        rowFrag.appendChild(rowDiv);
        rowDiv.style.height = containerHeight/gridSize + "px";
        createPixels(rowDiv, gridSize); 
        container.appendChild(rowFrag);         
    } 
}


function createPixels (rowDiv, gridSize) {
    let pixelFrag = document.createDocumentFragment();
    
    for (let i = 0; i < gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.addEventListener('mouseover', draw);
        pixel.classList.add('pixel');
        pixelFrag.appendChild(pixel);
        rowDiv.appendChild(pixelFrag);     
    } 
}

function clearGrid () {
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function eraseGrid () {
    console.log(drawToggle.checked);
    resetDrawMode();
    let pixelsToErase = document.querySelectorAll('.pixel');
    pixelsToErase.forEach(element => {
       
        element.style.backgroundColor = "#FFFFFF";
    })
}

let input = document.getElementById("rainbow");
function setColorMode (e) {
    input.addEventListener('input', function () {
        return "draw mode"
    });

    if (e.target.id === "rainbow") {
        colorMode = "rainbow";
        
    } 
}

window.onload = () => {
    createGrid();
  }












