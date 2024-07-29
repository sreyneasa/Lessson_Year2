let a = document.querySelectorAll('li a');
let array = [];
for (let value of a) {
    array.push(value.textContent);
}
// console.log(array)
function randomText() {

    let randomText = Math.floor(Math.random() * array.length);
    // console.log(array[randomText])
    let h1 = document.querySelector('h1');
    h1.textContent = array[randomText]
}


setInterval(randomText, 100);


// =======================

// function randomText() {
//     let a = document.querySelectorAll('li a');
//     let array = [];
//     for (let value of a) {
//         array.push(value.textContent);


//     }
//     // console.log(array)

//     let randomText = Math.floor(Math.random() * array.length);
//     // console.log(array[randomText])
//     let h1 = document.querySelector('h1');
//     h1.textContent = array[randomText]
// }


// setInterval(randomText, 100);















// const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

// function randomColor() {
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * colorCode.length);
//     color += colorCode[randomIndex];
//   }
// // set background color to body =  color code
//   document.body.style.backgroundColor = color;
// //   add text content to h1 = color code
//   document.querySelector("h1").textContent = "Color code: " + color;
// }

// setInterval(randomColor, 1000);