import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
     products= [
    {id:1,name:"Computer", price:10000, quantity:4, selected:true},
    {id:2, name:"printer", price:1000, quantity:5, selected:false},
    {id:3, name:"smart phone", price:1600, quantity:9, selected:true}
  ]
  constructor(private http:HttpClient){

  }
  getAllProduct(): Observable<any>{
    console.log()

    return this.http.get("http://localhost:8080/index");
  }
  deleteProduct(product:any){
    return this.http.delete("http://localhost:8080/delete/"+product.id);
  }
}
