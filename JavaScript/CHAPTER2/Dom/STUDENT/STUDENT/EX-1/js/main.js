const getColor = () => {
    let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let result = "#";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * colors.length);
        result += colors[index];
    }
    return result;
}

const getGradientColor = () => {
    let colorOne = getColor ();
    let colorTwo = getColor ();
    let angle = "to right";
    let gradient = 'linear-gradient('+ angle + ','+ colorOne +',' + colorTwo +')';
    document.body.style.background = gradient;
}

setInterval(getGradientColor, 500);

console.log(getColor())