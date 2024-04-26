import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemProductview } from 'src/app/Models/ItemProductView';
import { Order } from 'src/app/Models/Order';
import { OrderItem } from 'src/app/Models/OrderItem';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {


  items:ItemProductview[] = <Array<ItemProductview>>[];

  constructor(private _services:ShoppingService, private _router:Router, private activatedRouter:ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this._services.getItems(Number(id)).subscribe(data => this.items = data);
  }
}
