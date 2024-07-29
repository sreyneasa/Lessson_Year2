let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
let sum = 0 ;
for (let i = 0; i< numbers.length; i++){

    if (numbers[i]%2==1){
        sum += numbers[i]
    }
}
console.log(sum)

// output: 14 becuase 3 + 5 + 1 + 2 + 3
