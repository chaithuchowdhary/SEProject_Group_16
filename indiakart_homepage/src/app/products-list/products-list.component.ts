import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CartItem } from '../Models/CartItem';
import { Category } from '../Models/Category';
import { MyImage } from '../Models/MyImage';
import { OrderItem } from '../Models/OrderItem';
import { Product } from '../Models/Product';
import { ProductCatViewModel } from '../Models/ProductCategory';
import { OnlineShoppingService } from '../services/ProductCategory/productcat.service';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],

})
export class ProductsListComponent implements OnInit {

  products:Product[] = <Array<Product>>[];
  images:MyImage[] = <Array<MyImage>>[];
  cartItems:CartItem[] = <Array<CartItem>>[];
  searchTerm:any = "";
  public response:any = JSON.parse(localStorage.getItem("user") || "null");
  constructor(private _services:ShoppingService, private _prodCatService:OnlineShoppingService , private _router:Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this._services.getProducts().subscribe(data => this.products = data);
    this._services.getCartItems(this.response ? this.response.id:0).subscribe(data => this.cartItems = data);

    this._prodCatService.getAllCategory().subscribe(data => {
      this.CategoryList = data;
      // console.log("all category= "+this.CategoryList)
    });


    this._prodCatService.getAll().subscribe(data => {
      this.AllProds = data;
      console.log("all products= "+this.AllProds)
      this.Prods=this.AllProds;
    });




  }
  addCart(prod:ProductCatViewModel){
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

    alert(`${prod.name} is added successfully to your cart.`);
    window.location.reload();

  }







  Prods:ProductCatViewModel[]=[];
  filterProds:ProductCatViewModel[]=[];
  AllProds:ProductCatViewModel[]=[];

  tid:number=0;
  CategoryList:Category[]=[];
















  //tid:number=catform.productId

  onSubmit(catform:any)
  {

    //this.tid=fun1(catform.catname);
    //console.log(this.tid);


    if(catform.catname=="0")
    {
      this.Prods=this.AllProds;

    }

    else{

      this._prodCatService.GetProductsByCat(catform.catname)
      .subscribe( data =>  {this.Prods = data;
        //fun1(this.Prods);

      console.log(this.Prods)});
    }


  }

  onPriceSort()
  {
    //console.log("hi");
    //priceSort(this.Prods);
    this.Prods.sort((a, b) => (a.price > b.price) ? 1 : -1)
    console.log(this.Prods);

  }

  onNameSort()
  {
    this.Prods.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log(this.Prods);

  }


  onfilter(filterform:any)
  {

    this.filterProds=[]

    this.Prods.forEach((prod)=>
    {


      if(prod.brand==filterform.brand || filterform.brand=='')
      {
        // console.log("anish");



         if(filterform.p2==''&& filterform.p1=='')
      {
        this.filterProds.push(prod);
      }

      else if(filterform.p2==''&& <number>filterform.p1<=prod.price)
      {
        this.filterProds.push(prod);
      }


      else if(filterform.p1==''&& <number>filterform.p2>=prod.price)
      {
        this.filterProds.push(prod);

      }


      else if(<number>filterform.p1<=prod.price&& <number>filterform.p2>=prod.price)
      {
        this.filterProds.push(prod);
      }

      }
    }
    );

    console.log(this.filterProds);

    this.Prods=this.filterProds

  }


  resetList()
  {
    this.Prods=this.AllProds;
  }





}
