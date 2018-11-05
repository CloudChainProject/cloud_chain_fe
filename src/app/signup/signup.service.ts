import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';

import { User } from '../login/user'

@Injectable({
  providedIn: 'root',
})

export class SignupService {
  loginUrl = 'http://localhost:3000/api/v1/signup';

  constructor (private http:HttpClient) { }

  signup(user:User): Observable<any>{
    console.log(user)
    return this.http.post(`${this.loginUrl}/new_user`, {'User': user}).pipe(map((res)=>{
      console.log('mao')
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
