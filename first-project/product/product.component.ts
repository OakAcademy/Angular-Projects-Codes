import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl:'./product.component.html',
  styles: ['p{color:blue}']
})
export class ProductComponent implements OnInit {

  productId:number=1;
  stockStatus:string='Yes';
  getStockStatus(){

    return this.stockStatus;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
