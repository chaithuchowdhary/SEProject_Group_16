import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Product } from '../Models/Product';
// import { OnlineShoppingService } from '../services/ProductCategory/productcat.service';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  // products: Product[] = <Array<Product>>[];
  public response: any = JSON.parse(localStorage.getItem("user") || "null");

  // constructor(private _services: ShoppingService, private _prodCatService: OnlineShoppingService, private _router: Router, private activatedRouter: ActivatedRoute) { }
  constructor(private _services: ShoppingService, private _router: Router, private activatedRouter: ActivatedRoute) { }

  
  images = [
    {img:"https://geekculture.co/wp-content/uploads/2021/09/iphone-13-pro-max-.jpg",
    title:"Apple",
    description:"Grab the best deals on Apple products"},
    {img:"https://www.xda-developers.com/files/2020/02/03.-Galaxy-Watch-Active_Watchfaces.gif",
    title:"Samsung Galaxy Watch",
    description:"Grab the best deals on Samsung Galaxy Watch products"},
    {img:"https://img.global.news.samsung.com/br/wp-content/uploads/2021/03/Tab-_-e1617024107741.gif"},
    {img:"https://decoding.com.au/wp-content/uploads/2021/11/Samsung-Galaxy-S22-Plus-Ultra-Camera-Battery-Specs-Price-and-Release-Date.png"},
    {img:"https://qph.fs.quoracdn.net/main-qimg-d9a06e64c69f7a8e908f8c190ce99b15"},
    {img:"https://i-raovat.vnecdn.net/2021/06/03/3c34798f_1622713520.png?w=1280&h=768&q=100&dpr=1&rt=auto&g=no&s=ulIeidLPoEyaZshmWzTZYw",
    title:"LG Smart TV",
    description:"LG offers a wide range of products"},
  ]
  ngOnInit(): void {
    // this._services.getProducts().subscribe(data => {
    //   this.products = data
    //   this.products = this.products.splice(0, 5);
    //   console.log(this.products);
    // });
  }

}
