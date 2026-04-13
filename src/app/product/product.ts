import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit{
  products: Array<any>=[];

  constructor(){

  }

  ngOnInit(): void {
    this.products= [
    {id:1,name:"Computer", price:10000, quantity:4, selected:true},
    {id:2, name:"printer", price:1000, quantity:5, selected:false},
    {id:3, name:"smart phone", price:1600, quantity:9, selected:true}
  ]
    
  }
  handleDellet(product:any):void{
    let v=confirm("étes vous sure de vouloir supprimmer ?")
    if(v){
        this.products=this.products.filter(p=>p.id!=product.id);

    }
  }
}
