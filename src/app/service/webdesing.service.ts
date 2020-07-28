import { Injectable } from '@angular/core';
import { Webdesing } from '../models/webdesing';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebdesingService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;

  description: string;
  title: string;

  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getWebdesings() {
    return this.http.get<Webdesing>(this.ServerUrl + 'api_webdesing/Webdesings').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedWebdesings() {
    return this.http.get<Webdesing>(this.ServerUrl + 'api_webdesing/featured_Webdesings').pipe(
      catchError(this.handleError)
    );
  }

  getWebdesing(id: number) {
    return this.http.get<Webdesing>(this.ServerUrl + 'api_webdesing/Webdesing/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentWebdesings() {
    return this.http.get<Webdesing>(this.ServerUrl + 'api_webdesing/recent_Webdesings').pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
