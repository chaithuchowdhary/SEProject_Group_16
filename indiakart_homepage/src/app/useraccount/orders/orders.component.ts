import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Models/Order';
import { OrderItem } from 'src/app/Models/OrderItem';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[] = <Array<Order>>[];
  items:OrderItem[] = <Array<OrderItem>>[];

  constructor(private _services:ShoppingService, private _router:Router, private activatedRouter:ActivatedRoute) { }
  public response:any = JSON.parse(localStorage.getItem("user") || "null");
  ngOnInit(): void {
    this._services.getOrders(this.response ? this.response.id : 0).subscribe(data => this.orders = data);
  }



}
