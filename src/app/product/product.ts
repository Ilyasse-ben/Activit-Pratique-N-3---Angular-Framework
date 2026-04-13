import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit{
  products: Array<any>=[];

  constructor(private productService: ProductService){


  }

  ngOnInit(): void {
      this.products=this.productService.getAllProduct();
    
  }
  handleDellet(product:any):void{
    let v=confirm("étes vous sure de vouloir supprimmer ?")
    if(v){
        this.productService.deleteProduct(product);
        this.ngOnInit();
    }
  }
}
