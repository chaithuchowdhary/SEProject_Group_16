import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/Retailer/register.service';

@Component({
  selector: 'app-retaileraccount',
  templateUrl: './retaileraccount.component.html',
  styleUrls: ['./retaileraccount.component.css']
})
export class RetaileraccountComponent implements OnInit {

  constructor(private service:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("retailer");
    // window.location.reload();
    this.router.navigate(['/home/homepage']);
  }
}
