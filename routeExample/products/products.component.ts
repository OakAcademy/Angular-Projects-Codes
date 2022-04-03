import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=products;
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //route Parameter
    /* this.route.paramMap.subscribe(x=>{
      console.log(x);
    })

    let id=this.route.snapshot.paramMap.get('id'); */

    //query Params
    /* this.route.queryParamMap.subscribe(x=> {
      console.log(x);
    }); */

    let page=this.route.snapshot.queryParamMap.get('page');
    console.log(page);

  }

  showProducts(){
    // this.router.navigate(['/products'],{relativeTo:this.route});
    this.router.navigate(['/products'],
    {queryParams: {page:1}});

  }
}
