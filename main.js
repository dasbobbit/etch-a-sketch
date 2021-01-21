const container = document.querySelector('#container');
const dimBar = document.getElementById('dimensionBar');
const dimValue = document.querySelector('#dimensionValue');
const resetBtn = document.getElementById('reset-btn');
const colorBtns = document.querySelectorAll('.colors');
const pixelColor = document.getElementById('pixel-color-choice');
pxColor = pixelColor.value;

let dim = dimBar.value;

function createGrid(dim) {
    // Empty current grid
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    // Create grid
    gridArea = dim * dim;
    for (let i = 0; i < gridArea; i++) {
        let gridBlock = document.createElement('div');
        gridBlock.className = 'pixel';
        container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridBlock);
    }
    // Set event listeners for all divs
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', colorPixel);
    })
}
// Fill in pixels on hover
function colorPixel(e) {
    e.target.style.backgroundColor = pxColor;
}

// Change grid size when dimensions are changed
dimBar.addEventListener('change', () => {
    createGrid(dimBar.value);
})
// Change grid size counter on slider
dimBar.addEventListener('input', () => dimValue.textContent = dimBar.value); 

// Reset grid when Reset button clicked
resetBtn.addEventListener('click', () => createGrid(dim));

// Change color when color button clicked
colorBtns.forEach(colors => {
    colors.addEventListener('click', (e) => {
        pxColor = e.target.id;
        })
})

// //Set colors of the buttons
// colorBtns.forEach(colors => {
//     log.print(this);
// })

pixelColor.addEventListener('change', () => pxColor = pixelColor.value);

createGrid(dim);

