import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../Model/Login';
import { LoginResponse } from '../Model/LoginResponse';
import { LoginService } from '../services/User/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userlogin:Login={} as Login;
  constructor(private _service:LoginService,private router:Router) { }
  public loginresponse:any={};

  ngOnInit(): void {
  }
  submit(){
    this._service.UserLogin(this.userlogin).subscribe(data=>{this.loginresponse=data;
      console.log(this.loginresponse);
      localStorage.setItem("user",JSON.stringify(this.loginresponse));
      this.router.navigate(['/']);
    });
  }

}
