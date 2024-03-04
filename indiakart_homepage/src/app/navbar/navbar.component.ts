import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartItem } from '../Models/CartItem';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartItems:CartItem[] = <Array<CartItem>>[];
  public response:any = JSON.parse(localStorage.getItem("user") || "null");
  constructor(private _service:ShoppingService, private router:Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this._service.getCartItems(this.response ? this.response.id : 0).subscribe(data => this.cartItems = data);
  }




  logout(){
    localStorage.removeItem("user");

    this.router.navigate(['/home/homepage']);
  }
}
