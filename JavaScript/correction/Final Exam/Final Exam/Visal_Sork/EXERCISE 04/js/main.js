// HTML DOM 
const result = document.querySelector("#result");
const userName = document.querySelector("#name");
const gender = document.querySelector("#gender");
const checkBox = document.querySelectorAll("#sport");
const textArea = document.querySelector("#message");


// Show detail 
let showDetail = () => {
    // create card 
    let card = document.createElement("div");
    card.className = "card";

    // Check female or male 
    let userGender = "Mr. "
    if (gender.value == "Female") {
        card.classList.add("female");
        userGender = "Ms. "
    }
    else {
        card.classList.add("male");
    }

    // create h1: name
    let h1 = document.createElement("h1");
    h1.textContent = userGender + userName.value;
    card.appendChild(h1);

    // get checkbox value 
    let check = [];
    for (let box of checkBox) {
        if (box.checked) {
            check.push(box.value);
        }
    }
    // create p: interest 
    let interest = document.createElement("p");
    if (check.length > 1) {
        interest.textContent = "Interests: " + check;
    }
    else {
        interest.textContent = "Interested: " + check;
    }
    card.appendChild(interest);

    // create p: message 
    let message = document.createElement("p");
    message.textContent = textArea.value;
    card.appendChild(message);

    result.appendChild(card);
}

// Event listener 
let btn = document.querySelector("#submit");
btn.type = "button";
btn.addEventListener("click", showDetail);