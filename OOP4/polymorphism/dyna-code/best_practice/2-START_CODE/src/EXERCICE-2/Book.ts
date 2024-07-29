import { Author } from "./Author";
import { Publisher } from "./Publisher";

export class Book{
      private authors:Author[] = [];
      private publisher?:Publisher;

      constructor(private title:string, private year:number){
            this.title = title;
            this.year = year;            
      }

      public getAuthor():Author[]{
            return this.authors;
      }

      public getPublisher():Publisher | undefined{return this.publisher}

      public addAuthor(author:Author):void{
            this.authors = this.authors.concat(author);
      }

      public setPublisher(publisher:Publisher):void{
            this.publisher = publisher;
      }

}
