import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {NotificationService} from '../../services/notification.service'
import {Router} from '@angular/router'
import {Location} from '@angular/common'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string ;
  password : string;

  constructor(private authService : AuthService, private notification: NotificationService, private router : Router, private location : Location) { }

  ngOnInit() {
  }

  OnSignIn() {
    let loginDetails = {
      "email" : this.email,
      "password" : this.password
    }
    this.authService.login(loginDetails).subscribe(token => {
      this.authService.getUserName(loginDetails.email).subscribe(data => {
        this.authService.setSession(token, data.name);
        this.authService.setLoggedin(loginDetails.email);
        this.location.back();   
      })
           
      
     
    }, err => {
      console.log(err.error);
      this.notification.showError(err.error);
    })
  }

}
