import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Category } from 'src/app/Models/Category';
import { Product } from 'src/app/Models/Product';
import { ProductCatViewModel } from 'src/app/Models/ProductCategory';




@Injectable({
  providedIn: 'root'
})
export class OnlineShoppingService {
  url1: string = "http://localhost:43501/api/ProductCategory"
  url2: string = "http://localhost:43501/api/UserProfile"
  url3: string = "http://localhost:43501/api/UserProfile/getaddress"
  url4: string = "http://localhost:43501/api/UserProfile/getorders"
  url5: string = "http://localhost:43501/api/UserProfile/getorderdetails"
  url6: string = "http://localhost:43501/api/ProductCategory/getcategory"
  url7: string = "http://localhost:43501/api/UserProfile/getusr"
  url8: string = "http://localhost:43501/api/UserProfile"
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  url9: string = "http://localhost:43501/api/AddProduct";
  url10: string = "http://localhost:43501/api/AddProduct/postcat"



  constructor(private http: HttpClient) { }

  GetProductsByCat(id: Number): Observable<any> {
    return this.http.get<any>(`${this.url1}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get<ProductCatViewModel>(this.url1);
  }

  getAllCategory(): Observable<any> {
    return this.http.get<Category>(this.url6);
  }


  getUserDetails(id: Number): Observable<any> {
    return this.http.get<any>(`${this.url2}/${id}`);
  }


  getAddressDetails(id: Number): Observable<any> {
    return this.http.get<any>(`${this.url3}/${id}`);
  }


  getOrders(id: Number): Observable<any> {

    return this.http.get<any>(`${this.url4}/${id}`)

  }

  getOrderDet(id: Number): Observable<any> {
    return this.http.get<any>(`${this.url5}/${id}`);
  }

  GetUser(id: Number): Observable<any> {
    return this.http.get(`${this.url7}/${id}`); //back tik
    //   return this.http.get(this.url+"/"+ id);
  }


  AddProduct(product1: Product): Observable<any[]> {
    return this.http.post<any>(this.url9, product1);
  }

  AddCat(cat1: Category): Observable<any[]> {
    return this.http.post<any>(this.url10, cat1);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
