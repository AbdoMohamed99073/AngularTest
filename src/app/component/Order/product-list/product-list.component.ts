import { Component } from '@angular/core';
import {Iproduct} from "../../../Models/iproduct";
import {parse5} from "@angular/cdk/schematics";
import {Icategory} from "../../../Models/icategory";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectcatID:number=0;
  careglist:Icategory[];
  prdlist:Iproduct[];
  OrdertotalPrice:number=0;

  constructor() {
    this.careglist=[
      {id: 100,name: "lap"},
      {id: 101,name: "pc"},
      {id: 102,name: "mob"},
    ];
    this.prdlist=[
      {id: 100,name: "lenovo",price:1,quantity:0,imgURL:"https://fakeimg.pl/350x200/ff0000,128/000,255",categoryID:2},
      {id: 101,name: "dell",price:1,quantity:5,imgURL:"https://fakeimg.pl/350x200/ff0000,128/000,255",categoryID:3},
      {id: 102,name: "h[",price:1,quantity:2,imgURL:"https://fakeimg.pl/350x200/ff0000,128/000,255",categoryID:4},
    ];
  }
  buy(prdprice:number,itemCount:any)
  {

    this.OrdertotalPrice = +itemCount * prdprice ;

  }
  chanf()
  {
  this.selectcatID  = 102;
  }
  protrck(index:number , prd:Iproduct):number
  {
    return prd.id;
  }
}
