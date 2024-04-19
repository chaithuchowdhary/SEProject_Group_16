import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerRegister } from '../Model/RetailerRegister';
import { RegisterService } from '../services/Retailer/register.service';

@Component({
  selector: 'app-retailer-signup',
  templateUrl: './retailer-signup.component.html',
  styleUrls: ['./retailer-signup.component.css'],
})
export class RetailerSignupComponent implements OnInit {
  constructor(private service: RegisterService, private router: Router) {}
  public retailer: RetailerRegister = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    isActive: true,
    companyName: '',
    companyPhone: '',
    companyAddress: '',
    username: '',
    password: '',
    lastLogin: '2022-04-28T00:00:00',
  };

  ngOnInit(): void {}
  submit() {
    console.log(this.retailer);
    this.service.createRetailer(this.retailer).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']).then();
    });
  }
}
