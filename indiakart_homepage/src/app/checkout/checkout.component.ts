import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from '../Models/Address';
import { Card } from '../Models/Card';


import { CartItem } from '../Models/CartItem';
import { Order } from '../Models/Order';
import { OrderItem } from '../Models/OrderItem';
import { UserAddress } from '../Models/UserAddress';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = <Array<CartItem>>[];
  addresses: UserAddress[] = <Array<UserAddress>>[];
  cards: Card[] = <Array<Card>>[];
  selectedAddress: string = "";
  selectedCard: string = "";
  public isCollapsed = true;
  public isCollapsedCard = true;
  enteredcvv: string = "";
  public response: any = JSON.parse(localStorage.getItem("user") || "null");





  constructor(private _service: ShoppingService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this._service.getCartItems(this.response.id).subscribe(data => {
      data.forEach(item => {
        if (item.orderId == null)
          this.cartItems.push(item);
      })
    });
    this._service.getAddress(this.response.id).subscribe(data => this.addresses = data);
    this._service.getCards(this.response.id).subscribe(data => this.cards = data);
  }

  subTotal(total: number): Number {
    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      total += element.cost;

    }
    return total;
  }

  totalGst(total: number): Number {
    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      total += element.cost;

    }
    return total * 0.02;
  }

  Total(total: number): Number {
    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      total += element.cost;
    }
    return total + total * 0.02 ;

  }


  deleteItem(id: any, name: string) {
    this._service.deleteCartItem(id).subscribe();
    alert(`${name} has been removed successfully!`);
    window.location.reload();
  }



  addAddress(data: NgForm) {
    if (data.valid) {
      let a = <Address>{};
      a.address = data.value.addLine + ", " + data.value.city + ", " + data.value.state + ", " + data.value.zipcode;
      a.userId = this.response.id;
      console.log(a);
      this._service.addAddress(a).subscribe();
      window.location.reload();
    }
    else {
      alert(`Please enter a proper address.`)
    }
  }

  removeAddress(id: Number) {
    let add = <Address>{};
    this._service.deleteAddress(id).subscribe(data => add = data);
    alert(`Address removed successfully!`);
    window.location.reload();

  }

  addCard(data: NgForm) {

    let card = <Card>{};
    let chcard = <Card>{};
    if (data.valid) {
      card.cardNumber = data.value.cardNumber.toString();
      card.userId = this.response.id;
      card.expiry = data.value.expiry;
      card.type = data.value.cardType;
      console.log(card);
      this._service.addCard(card).subscribe(data => chcard = data);
      alert(`Card added successfully`);
      window.location.reload();
    }
    else {
      alert(`Please enter valid card details`);
    }


  }
  removeCard(id: number) {
    this._service.deleteCard(id).subscribe();
    window.location.reload();
  }


  addOrder() {
    let total = 0;
    let order = {} as Order;
    let placedOrder = {} as Order;
    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      total += element.cost;
    }
    total = total + total * 0.02 + 49;
    order.total = total;
    order.userId = this.response.id;
    order.date = new Date;
    order.shippingAddress = this.selectedAddress;
    order.status = "Pending";
    order.transactionId = order.userId + "_" + Date.now().toString();
    this._service.addOrder(order).subscribe(data => {
      this.cartItems.forEach(item => {
        console.log(data);
        item.orderId = data.id
        this._service.updateCart(item).subscribe();
      });
    });

    this.router.navigate(['/home/orderplaced']);
  }



}
