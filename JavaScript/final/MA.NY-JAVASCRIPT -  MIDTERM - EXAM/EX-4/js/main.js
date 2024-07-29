function randomAuthor() {
    let randomText = Math.floor(Math.random() * array.length);
    let h1 = document.querySelector('h1');
    h1.textContent = array[randomText]
}

// search movie title
const searchMovieTitle = (event) => {
    // TODO: search movie by title
    searchMovieTitle.addEventListener('click', function searchMovieTitle(event) {
        console.log(event.target.previousSibling.textContent);
        console.log(cardName.textContent = event.target.previousSibling.textContent);
    });
}


// Main
const tr = document.querySelectorAll('tbody tr');
const searchText = document.querySelector('#search');
const showTitle = document.querySelector('h1');

// TODO: Add event listeners on input search
searchMovieTitle.addEventListener('click','show');

// TODO: call randomAuthor function every 1000 milliseconds
setInterval(randomAuthor, 1000);



