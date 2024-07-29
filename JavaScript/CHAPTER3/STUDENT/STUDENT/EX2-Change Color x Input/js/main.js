


function changeColor() {
    // TODO
    // change body color to color that get from input type color 
    let x = inputColor.value;
    document.body.style.backgroundColor=x;
}

// Main
const inputColor = document.querySelector('#color')

// click on browser window to change color
document.addEventListener('change', changeColor)