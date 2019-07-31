import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service'
import { Weather } from '../../Models/Weather'

@Component({
  selector: 'app-single-weather',
  templateUrl: './single-weather.component.html',
  styleUrls: ['./single-weather.component.css']
})
export class SingleWeatherComponent implements OnInit {

  weather: any;
  id: number;
  airClass: string;
  pressureClass: string;
  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.weatherService.getSingleWeather(this.id).subscribe(data => {
        this.weather = data;
        console.log(data)
      })
    })
  }

  getAirClass() {
    let value = this.weather.wind.speed.rate;
    if (value > 10) {
      return 'col-sm-9 danger';
    } else if (value > 7 && value < 10) {
      return 'col-sm-9 warning'
    }
    else {
      return 'col-sm-9 normal'
    }
  }

  getPressureClass() {
    let value = this.weather.pressure.value;
    if (value < 990) {
      return 'col-sm-9 danger';
    } else if (value > 990 && value < 1000) {
      return 'col-sm-9 warning'
    }
    else {
      return 'col-sm-9 normal'
    }
  }

}
