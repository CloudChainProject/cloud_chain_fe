import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class DashboardService {
  productUrl = 'http://localhost:3000/ap1/v1/product';

  constructor (private http:HttpClient){}

  getNumberOfProducts():Observable<any>{
    return this.http.get(`${this.productUrl}/count`).pipe(map((res) => {
      return res//.json();
    })).pipe(catchError(this.handleError))
  }

  getNumberOfOrders():Observable<any>{
    return this.http.get(`${this.productUrl}/order/count`).pipe(map((res) => {
      return res//.json();
    })).pipe(catchError(this.handleError))
  }

  private handleError (error: Response | any) {
    console.log(error.error || error.json() || error);
    return throwError(error.error || error.json() || error || 'Server error');
  }

}
