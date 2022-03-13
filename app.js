const container = document.querySelector('.container');
const containerHeight = 400;
const containerWidth = 400;
let gridSize = 10;




function createRowDiv () {
    let rowFrag = document.createDocumentFragment();
    for (let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        
        rowDiv.classList.add('rowDiv');
        
        rowFrag.appendChild(rowDiv);
        rowDiv.style.height = containerHeight/gridSize + "px";
        createPixels(rowDiv); 
        container.appendChild(rowFrag);

        const createdPixels = document.querySelectorAll('.pixel-specs');
        createdPixels.forEach(element => {
            element.addEventListener('mouseover', function (e) {
                element.classList.add('turn-orange');
                e.stopImmediatePropagation();
            });
        });
        
        // console.log(createdPixels.length);
    }

    
}

function createPixels (rowDiv) {
    let pixelFrag = document.createDocumentFragment();
    
    for (let i = 0; i < gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel-specs');
        pixelFrag.appendChild(pixel);
        console.log("pixel frag: " + pixelFrag);
        rowDiv.appendChild(pixelFrag);
       
    } 

}

// let mouseDown = false
// document.body.onmousedown = () => (mouseDown = true)
// document.body.onmouseup = () => (mouseDown = false)

// for (let i = 0; i < size * size; i++) {
//     const gridElement = document.createElement('div')
//     gridElement.classList.add("grid-element")
//     gridElement.addEventListener('mouseover', changeColor)
//     gridElement.addEventListener('mousedown', changeColor)
//     grid.appendChild(gridElement)
//   }


// function changeColor(e) {
//     if (e.type === 'mouseover' && !mouseDown) return
//     if (currentMode === 'rainbow') {
//       const randomR = Math.floor(Math.random() * 256)
//       const randomG = Math.floor(Math.random() * 256)
//       const randomB = Math.floor(Math.random() * 256)
//       e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
//     } else if (currentMode === 'color') {
//       e.target.style.backgroundColor = currentColor
//     } else if (currentMode === 'eraser') {
//       e.target.style.backgroundColor = '#fefefe'
//     }
//   }











