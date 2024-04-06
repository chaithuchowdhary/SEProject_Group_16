import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserRegistration } from 'src/app/Model/UserRegistration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url:string='http://localhost:43501/api/Users';
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
  constructor(private http:HttpClient) { }
  getUser():Observable<any>{
    return this.http.get<UserRegistration>(this.url);
  }

  getUserById(id:number):Observable<any>{
    return this.http.get<UserRegistration>(this.url+'/'+id);
  }

  createUser(retailer:UserRegistration):Observable<any>{
    return this.http.post<UserRegistration>(this.url,retailer,this.httpOptions);
  }

  updateUser(retailer:UserRegistration):Observable<any>{
    return this.http.put<UserRegistration>(this.url+'/'+retailer.id,retailer,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  handleError(error:HttpErrorResponse){

    let errorMessage="";

    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;

    alert(errorMessage);

    return throwError(errorMessage);

  }
}
