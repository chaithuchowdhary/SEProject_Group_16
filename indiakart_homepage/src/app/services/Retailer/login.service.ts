import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Model/Login';
import { RetailerRegister } from 'src/app/Model/RetailerRegister';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:43501/api/Retailers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  RetailerLogin(retailer: Login): Observable<any> {
    return this.http.post<RetailerRegister>(
      this.url + '/login',
      retailer,
      this.httpOptions
    );
  }
}
