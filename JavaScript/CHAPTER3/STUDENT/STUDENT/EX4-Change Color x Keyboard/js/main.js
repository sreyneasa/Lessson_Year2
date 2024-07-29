const keyboardEvent = (event) => {
    // TODO 
    // let ny = event.key;
    // let h1 = document.querySelector('h1');
    // h1.textContent=ny

    let h1 = document.querySelector('h1');
    h1.textContent=event.key;
    
    // https://www.w3schools.com/jsref/event_key_key.asp
}

document.addEventListener('keydown', keyboardEvent)