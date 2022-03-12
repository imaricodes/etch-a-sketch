const container = document.querySelector('.container');
const containerHeight = 400;
const containerWidth = 400;
let gridSize = 100;




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







