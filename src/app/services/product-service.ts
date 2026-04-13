import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
     products= [
    {id:1,name:"Computer", price:10000, quantity:4, selected:true},
    {id:2, name:"printer", price:1000, quantity:5, selected:false},
    {id:3, name:"smart phone", price:1600, quantity:9, selected:true}
  ]
  constructor(){

  }
  getAllProduct(){
    return this.products;
  }
  deleteProduct(product:any):void{
    this.products=this.products.filter(p=>p.id!=product.id);
  }
}
