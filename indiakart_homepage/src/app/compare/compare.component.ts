import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { ProductDetails } from '../Models/ProductDetails';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  products:Product[] = <Array<Product>>[];
  constructor(private _services:ShoppingService) { }
  public selectedProduct1:number=0;
  public selectedProduct2:number=0;
  product1:Product=<Product>{};
  product2:Product=<Product>{};
  ngOnInit(): void {
    this._services.getProducts().subscribe(data => {

      this.products = data
      
      console.log(this.products);
    });

  }
  OnSelected(id:any){
    this.product1 = <Product>{};

this.product1 = this.products[Number(id)];

console.log(this.product1);
  }
  OnSelected2(id:any){
    this.product2 = <Product>{};
    this.product2 = this.products[id];
  }

}
