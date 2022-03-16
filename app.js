const container = document.querySelector('.container');
const containerHeight = 400;
const containerWidth = 400;
let colorMode = "none";




function createGrid () {
    clearGrid();
    let rowFrag = document.createDocumentFragment();
    let gridSize = document.getElementById('set-size').value;
    console.log(gridSize);
    for (let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        
        rowDiv.classList.add('rowDiv');
        
        rowFrag.appendChild(rowDiv);
        rowDiv.style.height = containerHeight/gridSize + "px";
        createPixels(rowDiv, gridSize); 
        container.appendChild(rowFrag);

        //add listener to elements
        let createdPixels = document.querySelectorAll('.pixel');
        let mouseDown = false
        document.body.onmousedown = () => (mouseDown = true);
        document.body.onmouseup = () => (mouseDown = false);

        const eraserBtn = document.getElementById('erase')
        
        

        //check color mode first? onclick set value in 
        
                
        createdPixels.forEach(element => {
            function draw (e) {
                if (e.type === 'mouseover' && !mouseDown) return
                //eraser class
                
                
                //if rainbow true, run rainbow function
                
                //else set color to color pick
                // if (colorMode === "draw mode") {
                //     let colorPick = document.getElementById('color-pick').value;
                    
                //     e.target.style.backgroundColor = colorPick;
                // }
                if (colorMode === "draw mode") {
                    let colorPick = document.getElementById('color-pick').value;
                    
                    e.target.style.backgroundColor = colorPick;
                    
                }

                else if (colorMode === "erase mode") {
                    e.target.style.backgroundColor = "#9F2B68";
                }

                // else {
                //     let colorPick = document.getElementById('color-pick').value;
                    
                //     e.target.style.backgroundColor = colorPick;
                // }
                
                
                
               
            }
            
            element.addEventListener('mouseover', draw);
        });
    } 
}

function createPixels (rowDiv, gridSize) {
    let pixelFrag = document.createDocumentFragment();
    
    for (let i = 0; i < gridSize; i++) {
        let pixel = document.createElement('div');
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
    
    let pixelsToErase = document.querySelectorAll('.pixel');
    pixelsToErase.forEach(element => {
        console.log(element);
        element.style.backgroundColor = "#FFFFFF";
    })
}

let input = document.getElementById("color-pick");
function setColorMode (e) {

    input.addEventListener('input', function () {
        colorMode = "draw mode";
        console.log("draw mode");
        return "draw mode"
    });

    
    
    if (e.target.id === "erase") {
        colorMode = "erase mode"
        console.log('erase button clicked');
        console.log(e.target.id);
        return "erase"  
    }
    else if (e.target.id === "rainbow") {
        console.log('rainbow button clicked');
        console.log(e.target.id);
        return "rainbow"  
    }

    
}

window.onload = () => {
    createGrid();
  }












