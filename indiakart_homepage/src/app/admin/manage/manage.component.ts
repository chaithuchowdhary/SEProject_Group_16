import { Component, OnInit } from '@angular/core';
import { RetailerRegister } from 'src/app/Model/RetailerRegister';
import { RegisterService } from 'src/app/services/Retailer/register.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  public retailers:RetailerRegister[]=[];
  constructor(private service:RegisterService) { }

  ngOnInit(): void {
    this.service.getRetailer().subscribe(data=>{
      this.retailers=data;
    });
  }
  deactivate(retailer:RetailerRegister){
    retailer.isActive=false;
    this.service.updateRetailer(retailer).subscribe(data=>{
      this.retailers=data;
    });
    window.location.reload();
  }
}
