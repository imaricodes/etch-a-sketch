const container = document.querySelector('.container');
const containerHeight = 800;
const containerWidth = 800;

//DRAWING FUNCTIONS
let colorMode = "default";
let drawmode = "default";
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
let mouseDown = false


function draw (e) {
    
    let colorPick = document.getElementById('color-pick').value;
   
    if (e.type === 'mouseover' && !mouseDown) return

    if (drawmode === "default" && colorMode === "default") {
        
        e.target.style.backgroundColor = colorPick;
    }
    else if (drawmode === "default" && colorMode === "rainbow" ) {
       
        e.target.style.backgroundColor = "#000000";
        
    }
    else if (drawmode === "erasemode") {
        e.target.style.backgroundColor = "#FFFFFF";
    }   
}


let drawToggle = document.getElementById('draw-toggle');
drawToggle.addEventListener('click',() => {

    if (drawToggle.checked === false) {

        drawmode = "default"; 
        
    }
    else if (drawToggle.checked === true){
        drawmode = "erasemode";
    } 
});

function setColorMode (e) {
    resetDrawMode();
    if (e.target.id === "rainbow") {
        colorMode = "rainbow";
        
    } 
}

function resetDrawMode () {
    drawToggle.checked = false;
    drawmode = "default";  
}

function resetColorMode(){
    colorMode = "default";
}


//CREATE GRID
let createdPixels = document.querySelectorAll('.pixel');

function createGrid () {
    resetDrawMode();
    clearGrid();
    let rowFrag = document.createDocumentFragment();
    let gridSize = document.getElementById('resolution-slider').value;
    
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

//MODIFY GRID
let resolutionValue = document.getElementById('resolution-slider').value;
let resolutionDisplay = document.querySelector('.resolution-display');
let resolutionSlider = document.getElementById('resolution-slider');
resolutionSlider.addEventListener('input', changeResolution);

function changeResolution (){
    let resolutionValue = document.getElementById('resolution-slider').value;
    resolutionDisplay.innerText = resolutionValue + " x " + resolutionValue;
    createGrid(); 
}

function eraseGrid () {
    
    resetDrawMode();
    let pixelsToErase = document.querySelectorAll('.pixel');
    pixelsToErase.forEach(element => { 
        element.style.backgroundColor = "#FFFFFF";
    })
}

function clearGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}



window.onload = () => {
    createGrid();
  }












