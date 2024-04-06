import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Model/Login';
import { UserRegistration } from 'src/app/Model/UserRegistration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string='http://localhost:43501/api/Users';
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
  constructor(private http:HttpClient) { }

  UserLogin(user:Login):Observable<any>{
    return this.http.post<UserRegistration>(this.url+'/login',user,this.httpOptions);
  }
}
