
let button = document.querySelectorAll('button');
for (let vaule of button){
    vaule.addEventListener("click",daleteBtn);
}


function daleteBtn(event){
    event.target.closest('tr').remove();
}