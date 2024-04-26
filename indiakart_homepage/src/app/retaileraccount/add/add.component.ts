import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { Product } from 'src/app/Models/Product';
import { OnlineShoppingService } from 'src/app/services/ProductCategory/productcat.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  CategoryList:Category[]=[]
  newProd:Product[]=[]
  newcat:Category[]=[]
  selectedcatId:string=""
  retailerId:Number=1;
  public response:any=JSON.parse(localStorage.getItem("retailer") || "0");
  public catname:Category={} as Category;

  constructor(private _service:OnlineShoppingService, private router: Router) { }

  ngOnInit(): void {

    this._service.getAllCategory().subscribe(data => {
      this.CategoryList = data;
      console.log("all category= "+this.CategoryList)
    });

  }


  onCatadd():void
  {
    console.log(this.catname);
    this._service.AddCat(this.catname).subscribe(data=>
      {
        this.newcat=data;
        console.log("data :"+this.newcat);
      });

      window.location.reload();


  }


  onSubmit(regform:any)
  {
    regform.categoryId=parseInt(regform.categoryId);
    regform.retailerId=this.response.id;
    if(regform.isAvailable=="true")
    regform.isAvailable=true
    else
    regform.isAvailable=false
    this._service.AddProduct(regform).subscribe(data=>
      {
        this.newProd=data;

        console.log("data :"+this.newProd);
      });

    console.log(regform)
  }

}
