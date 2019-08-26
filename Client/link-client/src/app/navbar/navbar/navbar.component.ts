import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName : string;
  isLoggedIn$ : Observable<boolean>;
  userName$ : Observable<string>;

  constructor(private auth : AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedin();
    this.userName$ = this.auth.UseName();
    console.log(this.isLoggedIn$);
    console.log(this.userName$);
  }


  onLogOut() {
    this.auth.logout();
  }
}
