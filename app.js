const container = document.querySelector('.container');
const containerHeight = 400;
const containerWidth = 400;
let gridSize = 10;


function createGrid () {
    let rowFrag = document.createDocumentFragment();

    for (let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        
        rowDiv.classList.add('rowDiv');
        
        rowFrag.appendChild(rowDiv);
        rowDiv.style.height = containerHeight/gridSize + "px";
        createPixels(rowDiv); 
        container.appendChild(rowFrag);

        //add listener to elements
        let mouseDown = false
        document.body.onmousedown = () => (mouseDown = true);
        document.body.onmouseup = () => (mouseDown = false);
        let createdPixels = document.querySelectorAll('.pixel');
        createdPixels.forEach(element => {
            function draw (e) {
                if (e.type === 'mouseover' && !mouseDown) return
                element.classList.add('turn-orange');
            }

            element.addEventListener('mouseover', draw);
        });
    } 
}

function createPixels (rowDiv) {
    let pixelFrag = document.createDocumentFragment();
    
    for (let i = 0; i < gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelFrag.appendChild(pixel);
        console.log("pixel frag: " + pixelFrag);
        rowDiv.appendChild(pixelFrag);
       
    } 
}

function clearGrid () {
    let createdPixels = document.querySelectorAll('.pixel');
    createdPixels.forEach(element => {
        element.classList.remove('turn-orange');
    })
}












