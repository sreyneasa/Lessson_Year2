// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const btn = document.querySelector('button');
// const color = document.getElementById('result-color');

// // return the color string code like example: #f00233
// function colorCode() {
//   let code = "#";
//   for (let i = 0; i < 6; i++) {
//     code += hex[getRandomColor()];
//   }
//   return code;
// }

// // return a random number between 0 and 16 (length of hex)
// function getRandomColor() {
//   return Math.floor(Math.random() * hex.length);
// }

// btn.addEventListener('click', function() {
//   const randomColor = colorCode();
//   document.body.style.background = randomColor;
//   color.textContent = randomColor;

// });


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('button');
const color = document.getElementById('result-color');

function colorCode() {
  let color1 = "#";
  for (let i = 0; i < 6; i++) {
    color1 += hex[getRandomColor()];
  }
  color.textContent = color1;
  color.style.color=color1;
  document.body.style.background=color1
}

function getRandomColor() {
  let ny = Math.floor(Math.random() * hex.length);
  return ny
}

btn.addEventListener('click', function() {
  colorCode()
});

