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
      this.productService.getAllProduct().subscribe({
        next:rsp=>{
          this.products=rsp;
          console.log(this.products)
        },
        error: err=>{console.log('errer ')}
      })
    
  }
  handleDellet(product:any):void{
    let v=confirm("étes vous sure de vouloir supprimmer ?")
    if(v){
        this.productService.deleteProduct(product).subscribe({
          next: value=>{
            this.ngOnInit()
          },
          error:err=>{ console.log(err)}
        });
        this.ngOnInit();
    }
  }
}
