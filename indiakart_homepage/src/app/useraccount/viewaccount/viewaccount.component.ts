import { Component, OnInit } from '@angular/core';
import { UserRegistration } from 'src/app/Model/UserRegistration';
import { RegisterService } from 'src/app/services/User/register.service';

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.css']
})
export class ViewaccountComponent implements OnInit {

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
