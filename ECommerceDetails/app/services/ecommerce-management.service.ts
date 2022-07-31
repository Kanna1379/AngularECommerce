import { Injectable } from '@angular/core';
import { Category } from '../common/category';
import { Product } from '../common/product';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceManagementService {


    producturl = "http://localhost:8080/api/prod"
    categoryurl = "http://localhost:8080/api/category"
    
    constructor( private httpClient : HttpClient){}
    
    getAllProduct() : Observable<Product[]>{
        console.log(this.httpClient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products)));
        return this.httpClient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products));
    }
    
    getAllCategory() : Observable<Category[]>{
        console.log(this.httpClient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.categories)));
        return this.httpClient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.categories));
    }
    
    }
    interface getProductResponse{
        _embedded:{
           products: Product[]
        }
}
interface getCategoryResponse{
  _embedded:{
      categories: Category[]
  }
}