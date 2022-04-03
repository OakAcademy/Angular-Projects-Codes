import { Book } from './book.model';
import { dataSource } from './dataSource.model';

export class BookRepository{
    private dataSource: dataSource;
    private books: Book[];

    constructor(){
        this.dataSource=new dataSource();
        this.books=new Array<Book>();
        this.dataSource.getBooks().forEach(b=> this.books.push(b));
    }

    getBooks():Book[]{
        return this.books;
    }

    getBookId(id:number): Book {
        return this.books.find(b=> b.id==id);
    }

    addBook(book:Book){
        this.books.push(book);

    }

    deleteBook(book:Book){
        let index=this.books.indexOf(book);
        this.books.splice(index,1);
    }

}