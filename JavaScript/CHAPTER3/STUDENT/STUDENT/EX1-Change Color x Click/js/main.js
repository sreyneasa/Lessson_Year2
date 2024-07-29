
function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function changeColor() {
    // TODO 
    document.body.style.background=randomColor();
    // set the body background to random color
}

// click on browser window to change color
document.addEventListener('click', changeColor)