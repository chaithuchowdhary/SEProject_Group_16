import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from 'src/app/Model/UserRegistration';
import { RegisterService } from 'src/app/services/User/register.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public loginResponse: any | null = JSON.parse(localStorage.getItem("user") || 'null');
  public user: UserRegistration = {} as UserRegistration;
  constructor(private service: RegisterService, private router: Router) { }
  ngOnInit(): void {
    if (this.loginResponse != null) {
      this.service.getUserById(this.loginResponse.id).subscribe(data => {
        this.user = data;
        console.log(this.user);
      });
    }
  }
  submit() {
    this.service.updateUser(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home/user']);
    }
    );

  }

}
