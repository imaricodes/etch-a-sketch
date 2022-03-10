const container = document.querySelector('.container');
const rowDiv = document.createElement('div');
let pixelFrag = document.createDocumentFragment();

console.log(container);
function createRowDiv () {
    rowDiv.classList.add('rowDiv');
    container.appendChild(rowDiv);
    
}

function createPixels () {
    
    for (let i = 0; i < 10; i++) {
       
        const pixel = document.createElement('div');
        pixel.classList.add('pixel-specs');
        pixel.textContent = "P";
        pixelFrag.appendChild(pixel);
    }
    rowDiv.appendChild(pixelFrag);

}