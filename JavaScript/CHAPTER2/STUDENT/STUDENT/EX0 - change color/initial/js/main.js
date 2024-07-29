// let btnEvent = () =>{
//     document.body.style.backgroundColor = "red";
// }
// let paraEvent = () => {
//     document.body.style.backgroundColor = "orange";
// }
// let divEvent = () => {
//     document.body.style.backgroundColor = "teal";
// }

// const btn = document.querySelector('button');
// const para = document.querySelector('p');
// const div = document.querySelector('div');

// btn.addEventListener('click', btnEvent);
// para.addEventListener('click', paraEvent);
// div.addEventListener('click', divEvent);



const btn = document.querySelector('button');
const p = document.querySelector('p');
const div = document.querySelector('div');

btn.addEventListener('click',()=>{
    document.body.style.background = "red";
})
p.addEventListener('click',()=>{
    document.body.style.background = "orange";
})
div.addEventListener('click',()=>{
    document.body.style.background = "teal";
})
