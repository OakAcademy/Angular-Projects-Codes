import { Book } from './book.model';


export class dataSource {

    private books: Book[];

    constructor(){
        this.books= new Array<Book>(
            new Book(1,'War and Peace','Tolstoy',20),
            new Book(2,'My Childhood','Tolstoy',10),
            new Book(3,'Sweaters','Tolstoy',15)
        );
    }

    getBooks(): Book[]{
        return this.books;
    }

}