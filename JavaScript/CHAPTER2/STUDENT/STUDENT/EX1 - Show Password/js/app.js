function viewPassword() {
    let passwords = document.querySelectorAll('.pwd');
    for (let password of passwords) {
        if (password.type === "password"){
            password.type ="text"
        }else{
            password.type ="password"
        }
    }
}

let view = document.querySelector('#view_pwd');

view.addEventListener('click', viewPassword);


// function viewPassword() {
//     let passwords = document.querySelectorAll('.pwd');
//     for (let password of passwords) {
//         if (password.type === "password") {
//             password.type = "text"; // Change to visible
//         } else {
//             password.type = "password"; // Change to invisible
//         }
//     }      
// }
// let view = document.querySelector('#view_pwd');

// view.addEventListener('click', viewPassword);