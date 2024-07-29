//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {

  // 1- Check the event if raised on the button delete 
  if (window.confirm('Do you want to delete?')) {
    event.target.closest('li').remove();
  }

  //  2  if yes, get the parent and remove it from the  bookList
}

function addBook(event) {
  event.preventDefault();

  let k = createBook.value;

  if (k != '') {
    let bookName = document.createElement('span');
    bookName.classList.add('name');
    bookName.textContent = k;

    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = "delete";

    let li = document.createElement('li')

    li.appendChild(deleteBtn);
    li.appendChild(bookName);
    Ul.appendChild(li);
    createBook.value = '';
  }


}

function searchBook(event) {
  // 1- Get the search text
  let searchValue = searchBookInput.value;
  console.log(searchValue);
  // 2- Loop on all LI
  
  // Update the style of the LI (visible or hidden)

}

//  MAIN -------------------------------------------------------------
let createBook = document.querySelector('#add-book-textfield');
let Ul = document.querySelector('ul');



let bookList = document.querySelector(".delete");
bookList.addEventListener("click", deleteBook);


let addForm = document.getElementById("add-book");
addForm.addEventListener('click', addBook);


let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);


