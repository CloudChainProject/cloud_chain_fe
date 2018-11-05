import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';

import { User } from './user'

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  loginUrl = 'http://localhost:3000/api/v1/login/user';

  constructor (private http:HttpClient) { }

  getToken(user:User): Observable<any>{
    return this.http.post(`${this.loginUrl}/token`, {'User': user}).pipe(map((res)=>{
      return res//.json()
    })).pipe(catchError((err) => {
      return this.handleError(err)
    }))
  }


  private handleError (error: Response | any) {
    console.log(error.error || error.json() || error);
    return throwError(error.error || error.json() || error || 'Server error');
  }


}
