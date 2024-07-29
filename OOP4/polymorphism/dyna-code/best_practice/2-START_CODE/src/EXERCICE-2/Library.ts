import { Author } from "./Author";
import { Book } from "./Book";
import { Publisher } from "./Publisher";

export class Library{
      private books:Book[] = [];
      constructor(private name:string, private address:string, ){}

      public getName():string{return this.name}

      public getAddress():string{return this.address}

      public addBook(book:Book):void{
            this.books = this.books.concat(book);
      }

      public getBooksFrom(author: Author):Book[] | undefined{
            let result:Book[] = [];
            this.books.forEach(book => {
                  let authors = book.getAuthor();
                  if (authors.length !== 0){
                        authors.forEach(elemnt => {
                              if (elemnt.getName().toLocaleLowerCase().includes(author.getName().toLocaleLowerCase())){
                                    result = result.concat(book);
                              }
                        });
                  }
            });
            return result;
      }

      public getBooksFromPublisher(publisher:Publisher):Book[] | undefined{
            let result:Book[] = [];
            this.books.forEach(book => {
                  let listPublisher = book.getPublisher();
                  if (listPublisher !== undefined && publisher.getName().toLowerCase().includes(listPublisher.getName().toLowerCase())){
                        result = result.concat(book);
                  }
            });
            return result;
      }
}
