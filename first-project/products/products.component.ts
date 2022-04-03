import { Component} from '@angular/core';



@Component({

    selector: 'products', //<products></products>
    templateUrl:'./products.component.html'

})



export class ProductsComponent {
    addProduct=true;
    addProductStatu='No product added';
    enteredValue='Product 1';


    constructor() { 

        setTimeout(()=> {
            this.addProduct=false;
        },4000);      
    }

    onClick(){
        this.addProductStatu='Product added and entered value is'
        + this.enteredValue ;
    }

    onUpdateProductName(event:Event){
        console.log(event);
        this.enteredValue=(<HTMLInputElement>event.target).value;
    }


}