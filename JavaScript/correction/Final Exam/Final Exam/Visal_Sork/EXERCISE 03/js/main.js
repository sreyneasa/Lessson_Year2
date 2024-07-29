// HTML DOM 
const firstNumber=document.querySelector("#firstnumber");
const lastNumber=document.querySelector("#lastnumber");
const result=document.querySelector(".result");
const h1=result.querySelector("h1");
const form=document.querySelector("form");
const btn=form.querySelectorAll("button");

// subtraction 
let subtraction=()=>{
    let result=firstNumber.value - lastNumber.value;
    showResult(result);
}

// dividing 
let divide=()=>{
    let result=(firstNumber.value / lastNumber.value);
    showResult(result);
}

// average
let average=()=>{
    let result=(Number(firstNumber.value) + Number(lastNumber.value))/2;
    showResult(result);
}

// Show result 
let showResult=(result)=>{
    h1.textContent="Result: "+ result;
}

// Event listener 
btn[0].type="button";
btn[1].type="button";
btn[2].type="button";
btn[0].addEventListener("click", subtraction);
btn[1].addEventListener("click", divide);
btn[2].addEventListener("click", average);