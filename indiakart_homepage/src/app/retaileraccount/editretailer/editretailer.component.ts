import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerRegister } from 'src/app/Model/RetailerRegister';
import { UserRegistration } from 'src/app/Model/UserRegistration';
import { RegisterService } from 'src/app/services/Retailer/register.service';

@Component({
  selector: 'app-editretailer',
  templateUrl: './editretailer.component.html',
  styleUrls: ['./editretailer.component.css']
})
export class EditretailerComponent implements OnInit {

  public loginResponse: any | null = JSON.parse(localStorage.getItem("retailer") || 'null');
  public user: RetailerRegister = {} as RetailerRegister;
  constructor(private service: RegisterService, private router: Router) { }
  ngOnInit(): void {
    if (this.loginResponse != null) {
      this.service.getRetailerById(this.loginResponse.id).subscribe(data => {
        this.user = data;
        console.log(this.user);
      });
    }
  }
  submit() {
    this.service.updateRetailer(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/view']);
    }
    );

  }
}
