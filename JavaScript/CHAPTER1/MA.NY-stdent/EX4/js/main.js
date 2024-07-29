let arr = [1, 3, 6, 7, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 5) {
    arr[i] = 9;
  }
}

console.log(arr);
// output: [9, 9, 6, 7, 9]

