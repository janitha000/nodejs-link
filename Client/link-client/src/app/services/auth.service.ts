import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  register(registerDelails) {
    return this.http.post('http://localhost:3000/auth/register', registerDelails)
  }

  login(loginDetails){
    return this.http.post('http://localhost:3000/auth/login', loginDetails);
  }

  setSession(token){
    localStorage.setItem('token', token);
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedin(){
    let token = localStorage.getItem('token');
    return token != null;
  }

}
