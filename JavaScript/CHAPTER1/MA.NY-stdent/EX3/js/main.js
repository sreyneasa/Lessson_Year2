let array1 = [1, 3, 6, 7, 9];
let array2 = [4, 3, 5, 9, 1];
let newArray = [];

for (let i = 0; i < array1.length; i++) {
  newArray.push(Math.max(array1[i], array2[i]));
}

console.log(newArray);

// output: [4,3,6,9,9]