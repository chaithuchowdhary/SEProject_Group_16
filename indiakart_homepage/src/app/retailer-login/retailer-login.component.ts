import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../Model/Login';
import { LoginService } from '../services/Retailer/login.service';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css'],
})
export class RetailerLoginComponent implements OnInit {
  public userlogin: Login = {} as Login;
  constructor(private _service: LoginService, private router: Router) {}
  public loginresponse: any = localStorage.getItem('retailer');

  ngOnInit(): void {}
  submit() {
    this._service.RetailerLogin(this.userlogin).subscribe((data) => {
      this.loginresponse = data;
      localStorage.setItem('retailer', JSON.stringify(this.loginresponse));
      console.log(data);
      if (data) {
        this.router.navigate(['/retailer']);
      }
    });
    // console.log(localStorage.getItem('retailer'));
  }
}
