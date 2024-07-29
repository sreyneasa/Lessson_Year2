// let text = "hello world [JavaScript] we [are] strong!";
// let newText= text.replace("[JavaScript]","").replace("[are]","");
// console.log(newText)

// output: hello world we strong!

let text = "hello world [JavaScript] we [are] strong!";
let iStrue=true;
let sumText=""
for(let value of text){
    if (value=="["){
        iStrue=false;
    }
    else if (value=="]"){
        iStrue=true;
    }
    else if(iStrue){
        sumText+=value;
    }
}
console.log(sumText)
// output: hello world we strong!