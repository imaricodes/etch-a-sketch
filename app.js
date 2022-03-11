const container = document.querySelector('.container');
const rowDiv = document.createElement('div');
let pixelFrag = document.createDocumentFragment();

console.log(container);



function createRowDiv () {
    rowDiv.classList.add('rowDiv');
    container.appendChild(rowDiv);
    createPixels();
      
}

function createPixels () {
    let createdPixel;
    for (let i = 0; i < 10; i++) {
        
        const pixel = document.createElement('div');
        pixel.classList.add('pixel-specs');
        pixel.textContent = "P";
        pixelFrag.appendChild(pixel);  
    }
    rowDiv.appendChild(pixelFrag);
    console.log(rowDiv);
    createdPixel = document.querySelectorAll('.pixel-specs');
    console.log(createdPixel.length);
    console.log("created pixel = " + createdPixel);

   createdPixel.forEach(element => {
       element.addEventListener('mouseover', function (e) {
           console.log('uck');
           element.classList.add('turn-orange');
           e.stopImmediatePropagation
       });
   });


    
   
   

}







