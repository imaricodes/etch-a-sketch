

const container = document.querySelector('.container');
const containerHeight = 800;
const containerWidth = 800;


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

//DRAWING FUNCTIONS
let colorMode = "default";
let drawmode = "default";
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
let mouseDown = false


let drawToggle = document.getElementById('draw-erase-switch');



drawToggle.addEventListener('click',() => {
    
    if (drawToggle.checked === false) {
        
        drawmode = "default"; 
        
    }
    else if (drawToggle.checked === true){
        drawmode = "erasemode";
    }        
});

let colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('click', useColorPicker);

let rainbowBtn = document.getElementById('rainbow-btn').addEventListener('click', rainbowMode)

function rainbowMode (e) {
    resetDrawMode();
    if (e.target.id === "rainbow-btn") {
        colorMode = "rainbow";  
    } 
}


function draw (e) {
    let colorPickValue = document.getElementById('color-picker').value;
   
    if (e.type === 'mouseover' && !mouseDown) return

    if (drawmode === "default" && colorMode === "default") {
        
        e.target.style.backgroundColor = colorPickValue;
    }
    else if (drawmode === "default" && colorMode === "rainbow" ) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor);
        e.target.style.backgroundColor = "#"+ randomColor;
        
    }
    else if (drawmode === "erasemode") {
        e.target.style.backgroundColor = "#FFFFFF";
    }   
}

function resetDrawMode () {
    drawToggle.checked = false;
    drawmode = "default";  
}


function useColorPicker(){
    colorMode = "default";
}

window.onload = () => {
    createGrid();
  }


















