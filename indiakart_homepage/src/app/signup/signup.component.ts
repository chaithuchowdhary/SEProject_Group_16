import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from '../Model/UserRegistration';
import { RegisterService } from '../services/User/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:RegisterService,private router:Router) { }
  public user:UserRegistration={
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    isActive: true,
    username: '',
    password: '',
    lastLogin:'2022-04-28T00:00:00'};

  ngOnInit(): void {
  }
  submit(){
    console.log(this.user);
    this.service.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/']).then();
  });
  }

}
