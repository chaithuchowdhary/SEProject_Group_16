import { Component, OnInit } from '@angular/core';
import { RetailerRegister } from 'src/app/Model/RetailerRegister';
import { RegisterService } from 'src/app/services/Retailer/register.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public loginResponse:any | null=JSON.parse(localStorage.getItem("retailer") || 'null');
  public user:RetailerRegister={} as RetailerRegister;
  constructor(private _service:RegisterService) { }

  ngOnInit(): void {
    console.log(this.loginResponse);
    if(this.loginResponse!=null){
    this._service.getRetailerById(this.loginResponse.id).subscribe(data=>{
      this.user=data;});
    }
  }

}
