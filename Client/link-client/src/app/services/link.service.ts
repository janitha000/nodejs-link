import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http : HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/user/users')
  }

  getCompanies() {
    return this.http.get('http://localhost:3000/user/companies')
  }

  getUserByName (name){
    return this.http.get(`http://localhost:3000/user/${name}`)
  }

  getCompanyByName(name){
    return this.http.get(`http://localhost:3000/user/companies/${name}`)
  }

  getLevelFriends(name, level){
    return this.http.get(`http://localhost:3000/user/${name}?level=${level}`)
  }
}
