import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {NotificationService} from '../../services/notification.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string ;
  password : string;

  constructor(private authService : AuthService, private notification: NotificationService, private router : Router) { }

  ngOnInit() {
  }

  OnSignIn() {
    let loginDetails = {
      "email" : this.email,
      "password" : this.password
    }
    this.authService.login(loginDetails).subscribe(data => {
      console.log(data);
      this.authService.setSession(data);
      this.router.navigateByUrl('/');
      console.log(this.authService.isLoggedin())
    }, err => {
      console.log(err.error);
      this.notification.showError(err.error);
    })
  }

}
