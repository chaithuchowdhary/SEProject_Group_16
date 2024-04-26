import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../Model/LoginResponse';
import { UserRegistration } from '../Model/UserRegistration';
import { RegisterService } from '../services/User/register.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit {

  public loginResponse:any | null=JSON.parse(localStorage.getItem("user") || 'null');
  public user:UserRegistration={} as UserRegistration;
  constructor(private _service:RegisterService) { }

  ngOnInit(): void {
    console.log(this.loginResponse);
    if(this.loginResponse!=null){
    this._service.getUserById(this.loginResponse.id).subscribe(data=>{
      this.user=data;});
    }
  }


}
