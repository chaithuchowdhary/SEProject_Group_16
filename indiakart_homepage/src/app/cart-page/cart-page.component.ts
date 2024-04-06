import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../Models/CartItem';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartItems:CartItem[] = <Array<CartItem>>[];
  public response:any = JSON.parse(localStorage.getItem("user") || "null");


  constructor(private _service:ShoppingService, private router:Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {


    this._service.getCartItems(this.response ? this.response.id:0).subscribe(data => this.cartItems = data);
  }

  subTotal(total:number):Number{
    if(this.response == null){
      return 0
    }
    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      total += element.cost;
      console.log(element.cost);
    }
    return total;
  }

  totalGst(total:number):Number{
    if(this.response == null){
      return 0
    }
    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      total += element.cost;

    }
    return total * 0.02;
  }

  Total(total:number):Number{
    if(this.response == null){
      return 0
    }
    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      total += element.cost;
    }
    return total + total * 0.02 + 49;

  }


  deleteItem(id:any, name:string){
    this._service.deleteCartItem(id).subscribe();
    alert(`${name} has been removed successfully!`);
    window.location.reload();
  }
  // increase(id:any){
  //   this.cartItems[id].quantity += 1;
  // }
  // decrease(id:any){
  //   this.cartItems[id].quantity -= 1;
  // }

}
