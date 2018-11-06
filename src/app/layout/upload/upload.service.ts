import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';
import { HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class UploadService {
  url = 'http://localhost:3008/createblock/';

  constructor (private http:HttpClient){}

  postFile(fileToUpload: File, teammember): Observable<any> {
    let headers = new Headers();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    const formData: FormData = new FormData();
    formData.append('data', fileToUpload, fileToUpload.name);

    return this.http
      .post(this.url + teammember, formData, headers).pipe(map((res) => {
        console.log('uploaded')
        return res//.json();
      })).pipe(catchError(this.handleError))
  }


  // postFile(fileToUpload: File, teammember): Observable<HttpEvent<any>> {
  //   let formData = new FormData();
  //   formData.append('upload', file);
  //
  //   let params = new HttpParams();
  //
  //   const options = {
  //     params: params,
  //     reportProgress: true,
  //   };
  //
  //   const req = new HttpRequest('POST', this.url, formData, options);
  //   return this.http.request(req);
  // }



  private handleError (error: Response | any) {
    console.log(error.error || error.json() || error);
    return throwError(error.error || error.json() || error || 'Server error');
  }

}
