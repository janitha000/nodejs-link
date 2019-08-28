import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(this.checkTokenAvailable());
  userName = new BehaviorSubject<string>(this.checkUserName());


  constructor(private http : HttpClient, private router : Router) { }

  register(registerDelails) {
    return this.http.post('http://localhost:3000/auth/register', registerDelails)
  }

  login(loginDetails){
    return this.http.post('http://localhost:3000/auth/login', loginDetails);
  }

  setSession(token : any, username : any){
    localStorage.setItem('token', token);
    localStorage.setItem('username', username)
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.isLoggedIn.next(false);
    this.router.navigate(['/']);
  }



  setLoggedin(){
    this.isLoggedIn.next(true);
  }

  getUserName (email) {
    return this.http.get<any>(`http://localhost:3000/auth/user?email=${email}`)
  }

  isLoggedin(){
    return this.isLoggedIn.asObservable();
  }

  UseName(){
    return this.userName.asObservable();
  }

  checkUserName(){
    let name = localStorage.getItem('username');
    return name;
  }

  checkTokenAvailable() {
    let token = localStorage.getItem('token');
    return token != null;
  }
}
