import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartItem } from '../Models/CartItem';
import { MyImage } from '../Models/MyImage';
import { OrderItem } from '../Models/OrderItem';
import { Product } from '../Models/Product';
import { ProductDetails } from '../Models/ProductDetails';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  // images = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg","https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg", "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg", "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" ];

  product:ProductDetails[] = <Array<ProductDetails>>[];
  images:MyImage[] = <Array<MyImage>>[];
  cartItems:CartItem[] = <Array<CartItem>>[];
  index:any = 0;
  zoomMode = "hover";
 
  public response:any = JSON.parse(localStorage.getItem("user") || "null");
  constructor(private _services:ShoppingService, private _router:Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this._services.getImg(Number(id)).subscribe(data2 => this.images = data2);
    this._services.getProductById(Number(id)).subscribe(data => this.product = data);
    this._services.getCartItems(this.response.id).subscribe(data => this.cartItems = data);
  }




  clicked(i:any){
    this.index = i;
    // this.myThumbnail = this.images[i].image;
    // this.myFullresImage = this.images[i].image;
  }
  addCart(prod:ProductDetails){
    if(this.response == null){
      alert(`Please login or signup first`);
      return
    }
    let existingItem = <CartItem>{};
    this.cartItems.forEach(item => {
      if (item.productId == prod.productId){
        existingItem = item;
      }
    });
    if (existingItem.id == null){
      let orderItem = {} as OrderItem;
      orderItem.cost = prod.price;
      orderItem.dateAdded = new Date();
      orderItem.productId = prod.productId;
      orderItem.quantity = 1;
      orderItem.userId = this.response.id;
      this._services.addToCart(orderItem).subscribe();
    }
    else{
      existingItem.quantity += 1;
      existingItem.cost += prod.price;
      this._services.updateCart(existingItem).subscribe();
    }

    alert(`${prod.productName} is added successfully to your cart.`);
    window.location.reload();

  }



}
