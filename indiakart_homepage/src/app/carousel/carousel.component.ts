import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Product } from '../Models/Product';
// import { OnlineShoppingService } from '../services/ProductCategory/productcat.service';
import { ShoppingService } from '../shopping.service';
import { title } from 'process';

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
    {img:"https://www.instacart.com/company/wp-content/uploads/2023/08/grocery-delivery-to-hotel-hero.webp",
    title:"Groceries",
    description:"Grab the best deals on Groceries"},
    {img:"https://www.hsph.harvard.edu/nutritionsource/wp-content/uploads/sites/30/2012/09/vegetables-and-fruits-farmers-market.jpg",
    title:"Fruits and Veggies",
    description:"Healthy Fruits and vegetables"},
    {img:"https://assets3.thrillist.com/v1/image/3014507/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"},
    {img:"https://www.quicklly.com/upload_images/blog/1629445694-find-the-best-online-indian-grocery-store-in-manhattan-ny.jpeg",title:"Spices"},
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
