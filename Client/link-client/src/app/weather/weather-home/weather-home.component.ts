import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  weather : Object;
  pageNo : number;

  constructor(private weatherService : WeatherService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this,this.activatedRoute.queryParams.subscribe(x => this.getWeather(parseInt(x.page) || 1));

  }

  getWeather(page){
    this.weatherService.getWeather(page).subscribe(data => {
      this.weather = data;
      this.pageNo = page;
      console.log(this.weather);
  })
}

  OnTableSelect(weather) {
    this.router.navigate(['weather/', weather._id])
  }

}
