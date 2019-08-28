import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AirbnbService {

  constructor(private http : HttpClient) { }
  
  getTopReviewLocations () {
    const params = new HttpParams().set('score', 'top');
    return this.http.get('http://localhost:3000/airbnb/review', {params});
  }

  get10ReviewLocations () {
    const params = new HttpParams().set('score', '10');
    return this.http.get('http://localhost:3000/airbnb/review', {params})
  }

  get9ReviewLocations() {
    const params = new HttpParams().set('score', '9');
    return this.http.get('http://localhost:3000/airbnb/review', {params});
  }
}
