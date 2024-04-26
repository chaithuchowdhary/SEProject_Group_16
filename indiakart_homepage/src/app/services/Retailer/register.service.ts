import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Login } from 'src/app/Model/Login';
import { RetailerRegister } from 'src/app/Model/RetailerRegister';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url: string = 'http://localhost:43501/api/Retailers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  getRetailer(): Observable<any> {
    return this.http.get<RetailerRegister>(this.url);
  }

  getRetailerById(id: number): Observable<any> {
    return this.http.get<RetailerRegister>(this.url + '/' + id);
  }

  createRetailer(retailer: RetailerRegister): Observable<any> {
    return this.http.post<RetailerRegister>(
      this.url,
      retailer,
      this.httpOptions
    );
  }

  updateRetailer(retailer: RetailerRegister): Observable<any> {
    return this.http
      .put<RetailerRegister>(
        this.url + '/' + retailer.id,
        retailer,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;

    alert(errorMessage);

    return throwError(errorMessage);
  }
}
