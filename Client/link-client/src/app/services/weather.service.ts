import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeather(page) {
    console.log('Calling weather api with page ' + page)
    return this.http.get(`http://localhost:3000/weather?page=${page}`);
  }

  getSingleWeather(id:number){
    return this.http.get('http://localhost:3000/weather/' + id);
  }
}
