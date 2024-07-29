// //  FUNCTIONS -------------------------------------------------------------
// function deleteBook(event) {
//   // 1- Check the event if raised on the button delete 
//   // 2  if yes, get the parent and remove it from the  bookList
//   if(event.target.className="delete"){
//     let li = event.target.parentElement;// get value form delete
//     bookList.removeChild(li);
//   }
// }




// //  MAIN -------------------------------------------------------------
// let bookList = document.querySelector("#book-list ul");
// bookList.addEventListener("click", deleteBook);

// let addForm = document.getElementById("add-book");
// addForm.addEventListener("submit", addBook);

// let searchBookInput = document   //get information form input 
//   .getElementById("search-books")
//   .querySelector("input");
// searchBookInput.addEventListener("keyup", searchBook);

//------------------------------------2-----------------------------

// function deleteBook(event) {
//   // 1- Check if the event was raised on the delete button
//   if (event.target.className === "delete") {
//     // 2- Get the parent li and remove it from the bookList
//     const bookItem = event.target.parentElement;
//     bookList.removeChild(bookItem);
//   }
// }

// function addBook(event) {
//   event.preventDefault();

//   // 1- Get the book name from the input field
//   const bookName = event.target.querySelector("input[type=text]").value;

//   // 2- Create a new span for the book name, class name = "name"
//   const nameSpan = document.createElement("span");
//   nameSpan.className = "name";
//   nameSpan.textContent = bookName;

//   // 3- Create a new span for the delete button, class name = "delete"
//   const deleteBtn = document.createElement("span");
//   deleteBtn.className = "delete";
//   deleteBtn.textContent = "Delete";

//   // 4- Create a new li
//   const listItem = document.createElement("li");

//   // 5- Add nameSpan and deleteBtn to li and li to the bookList UL
//   listItem.appendChild(nameSpan);
//   listItem.appendChild(deleteBtn);
//   bookList.appendChild(listItem);
// }

// function searchBook(event) {
//   // 1- Get the search text
//   const searchText = event.target.value.toLowerCase();

//   // 2- Loop through all li items
//   const books = bookList.getElementsByTagName("li");
//   Array.from(books).forEach(function (book) {
//     const bookName = book.firstElementChild.textContent.toLowerCase();
//     // Update the style of the li (visible or hidden) based on the search text
//     if (bookName.includes(searchText)) {
//       book.style.display = "block";
//     } else {
//       book.style.display = "none";
//     }
//   });
// }

// // MAIN -------------------------------------------------------------
// let bookList = document.querySelector("#book-list ul");
// bookList.addEventListener("click", deleteBook);

// let addForm = document.getElementById("add-book");
// addForm.addEventListener("submit", addBook);

// let searchBookInput = document
//   .getElementById("search-books")
//   .querySelector("input");
// searchBookInput.addEventListener("keyup", searchBook);


//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {

  // 1- Check the event if raised on the button delete 
  let parent = event.target.closest('li')
  
 //  2  if yes, get the parent and remove it from the  bookList
  parent.remove()
}

function addBook(event) {
  event.preventDefault();
  // 1- Get the book name from the input field
  let bookName = document.getElementById('add-book-textfield').value;

  if (bookName===''){
    let bookName = document.getElementById('add-book-textfield');
  }else{
    let spanOne = document.createElement('span')
    spanOne.setAttribute('class','name')
    spanOne.textContent = bookName;
    console.log(spanOne)
    let spanTwo = document.createElement('span')
    spanTwo.setAttribute('class','delete')
    spanTwo.textContent = "delete"
    console.log(spanTwo)
    // 4- Create a new li
    let li = document.createElement('li')
    li.appendChild(spanOne)
    li.appendChild(spanTwo)
    document.querySelector('ul').appendChild(li)

  }
  // 2- Create a new spam bookName for the book name, class name = name

  // 3- Create a new spam deleteBtn for the button delete, class name = delete

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL

}

function searchBook(event) {
  // 1- Get the search text
  let searchText = event.target.value;

  // 2- Loop on all LI
  let listLi = document.querySelectorAll('li');
  if (searchText === ""){
    for(let li of listLi) {
        li.style.display = 'block';
    }
  }
  else{
    for(let li of listLi) {
      let spanContent = li.firstElementChild.textContent.toUpperCase()
      if(spanContent.includes(searchText.toUpperCase()) === false) {
      // Update the style of the LI (visible or hidden)
        li.style.display = 'none';
        }
    }
  }
  }

//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("click", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);