import { Component } from '@angular/core';
import { BookRepository } from './repository.model';
import { Book } from './book.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ImageValidator } from './image.validator';



@Component({
  selector: "app-book",
  templateUrl: "book.component.html",
  styleUrls: ["book.component.css"]
})

// Reactive Form
export class BookComponent {

  bookForm= new FormGroup({
  /*   name:new FormControl('Sweaters'),
   writer:new FormControl('Tolstoy'),
   price:new FormControl('10'), */
   name:new FormControl('',[Validators.required,Validators.minLength(3)] ),
   writer:new FormControl('',Validators.required),
   price:new FormControl('',Validators.required),
   image:new FormControl('',[Validators.required,ImageValidator.isValidExtension]),
  })
  get name(){
    return this.bookForm.get('name');
  }
  get image(){
    return this.bookForm.get('image');
  }
  onSubmit(){
    console.log(this.bookForm.value);
  }

  updateBook(){
    this.bookForm.patchValue ({
      name:'Childhood',
      price: '5'
    });
  }
  /* name=new FormControl('Sweaters');
  writer=new FormControl('Tolstoy');
  price=new FormControl('10'); */

  /* updateName(){
    this.name.setValue('My Childhood');
  } */

}



// Form Controls
/* export class BookComponent {
  model: BookRepository = new BookRepository();

  newBook: Book = new Book();
  get jsonBook() {
    return JSON.stringify(this.newBook);
  }

  addBook(b: Book) {
    console.log("New Book is" + this.jsonBook);
  }

  getFormValidationErrors(form:NgForm):string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(x=>{
      console.log(x);
      console.log(form.controls[x]);

      this.getValidationErrors(form.controls[x],x)
      .forEach(message=> messages.push(message));
    })


    return messages;

  }

  getValidationErrors(model: any, key:string) {
    let ctrlName: string = model.name || key;
    let messages: string[] = [];

    if (model.errors) {
      for (let errorName in model.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${ctrlName}`);
            break;
          case "minlength":
            messages.push('You must enter min. 3 characters');
            break;
        }
      }
    }
    return messages;
  }

  log(model) {
    console.log(model);
  }

  formSubmit: boolean = false;

  submitForm(form: NgForm) {
     console.log(form);
    this.formSubmit = true;
    if (form.valid) {
      this.addBook(this.newBook);
      this.newBook = new Book();
      form.reset();
      this.formSubmit = false;
    }
  } 
} */
