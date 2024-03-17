import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../Models/Product';
import { OnlineShoppingService } from '../services/ProductCategory/productcat.service';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-topproducts',
  templateUrl: './topproducts.component.html',
  styleUrls: ['./topproducts.component.css']
})
export class TopproductsComponent implements OnInit {

  products:Product[] = <Array<Product>>[];
  public response:any = JSON.parse(localStorage.getItem("user") || "null");

  images = [944, 1011, 984,100,1000].map((n) => `https://picsum.photos/id/${n}/268/180`);
  constructor(private _services:ShoppingService, private _prodCatService:OnlineShoppingService , private _router:Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this._services.getProducts().subscribe(data => {
      this.products = data
      this.products = this.products.splice(0,5);
      console.log(this.products);
    });
  }



}
