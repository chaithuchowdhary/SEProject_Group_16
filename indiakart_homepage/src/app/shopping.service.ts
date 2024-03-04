import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Address } from './Models/Address';
import { Card } from './Models/Card';
import { CartItem } from './Models/CartItem';
import { Order } from './Models/Order';
import { OrderItem } from './Models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  url:string = "http://localhost:43501/";

  constructor(private http:HttpClient) { }

  getProductById(id:Number): Observable<any>{
    return this.http.get<any>(`${this.url}product/${id}`);
  }
  getProducts(): Observable<any>{
    return this.http.get<any>(`${this.url}product`);
  }
  getImg(id:Number):Observable<any>{
    return this.http.get<any>(`${this.url}images/${id}`);
  }

  getCartItems(id:Number):Observable<Array<CartItem>>{
    return this.http.get<Array<CartItem>>(`${this.url}cart/${id}`);
  }

  deleteCartItem(id:Number):Observable<any>{
    return this.http.delete<any>(`${this.url}cart/${id}`);
  }

  addToCart(orderItem:OrderItem){
    return this.http.post<any>(`${this.url}cart`, orderItem);
  }

  updateCart(orderItem:OrderItem){
    return this.http.patch<any>(`${this.url}cart`, orderItem);
  }

  getAddress(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}useraddress/${id}`)
  }
  addAddress(address:Address):Observable<any>{
    return this.http.post<any>(`${this.url}useraddress/`, address);
  }
  deleteAddress(id:Number):Observable<any>{
    return this.http.delete<any>(`${this.url}useraddress/${id}`)
  }


  getCards(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}card/${id}`);
  }
  addCard(card:Card):Observable<any>{
    return this.http.post<any>(`${this.url}card`, card);
  }
  deleteCard(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}card/${id}`);
  }


  addOrder(order:Order):Observable<any>{
    return this.http.post<any>(`${this.url}order`, order);
  }
  getOrders(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}order/${id}`);
  }
  getItems(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}order/items/${id}`);
  }
}
