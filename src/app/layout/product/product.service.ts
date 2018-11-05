import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  productUrl = 'http://localhost:3000/ap1/v1/product';

  constructor (private http:HttpClient){}

  createProduct(product:Product):Observable<any>{
    return this.http.post(`${this.productUrl}/create`, {'Product': product}).pipe(map((res) => {
      return res;
    })).pipe(catchError(this.handleError))
  }

  getProduct():Observable<any>{
    return this.http.get(`${this.productUrl}/list`).pipe(map((res) => {
      return res//.json();
    })).pipe(catchError(this.handleError))
  }

  buyProduct(products):Observable<any>{
    return this.http.post(`${this.productUrl}/order`, {'Products': products}).pipe(map((res) => {
      return res;
    })).pipe(catchError(this.handleError))
  }

  deleteProduct(id):Observable<any>{
    return this.http.delete(`${this.productUrl}/delete/${id}`).pipe(map((res)=>{
      return res//.json();
    })).pipe(catchError(this.handleError))
  }

  getInformation(id):Observable<any>{
    return this.http.get(`${this.productUrl}/details/${id}`).pipe(map((res)=>{
      return res//.json();
    })).pipe(catchError(this.handleError))
  }

  editProduct(product):Observable<any>{
    return this.http.put(`${this.productUrl}/edit/${product._id}`, {'Product': product}).pipe(map((res)=>{
      return res//.json();
    })).pipe(catchError(this.handleError))
  }

  private handleError (error: Response | any) {
    console.log(error.error || error.json() || error);
    return throwError(error.error || error.json() || error || 'Server error');
  }

}
