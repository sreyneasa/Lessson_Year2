import { Author } from "./Author";
import { Book } from "./Book";
import { Library } from "./Library";
import { Publisher } from "./Publisher";

//library
let pncLibrary = new Library("PNC LIBRARY","Phnom Penh");

//book
let oop = new Book("OOP is the best",2018);
let team = new Book("Best team ?", 2015);
let book = new Book("The why not book", 2020);

//author
let ronan = new Author("Ronan");
let him = new Author("Him");

//publisher
let sipar = new Publisher("Sipar","Phnom Penh");
let ibc = new Publisher("IBC","Siem Reap");

//add book
pncLibrary.addBook(oop);
pncLibrary.addBook(team);
pncLibrary.addBook(book);

//add author
oop.addAuthor(ronan);
team.addAuthor(ronan);
book.addAuthor(him);

//set publisher
oop.setPublisher(sipar);
team.setPublisher(sipar);

// console.log(pncLibrary.getBooksFrom(ronan));

console.log(pncLibrary.getBooksFromPublisher(sipar));

