import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { AirbnbService } from '../../services/airbnb.service'
import {Router } from '@angular/router'

@Component({
  selector: 'app-locations-home',
  templateUrl: './locations-home.component.html',
  styleUrls: ['./locations-home.component.css']
})
export class LocationsHomeComponent implements OnInit {

  TopLocations : any;
  TenLocations: any;
  NineLocations : any;

  constructor(private service : AirbnbService, private location : Location, private router : Router) { }

  ngOnInit() {
    this.service.getTopReviewLocations().subscribe(result => {
      this.TopLocations = result;
    }, error => {
      console.log(error.status);
    })

    this.service.get10ReviewLocations().subscribe(result => {
      this.TenLocations = result;
    }, error => {
      console.log(error.status);
    })

    this.service.get9ReviewLocations().subscribe(result => {
      this.NineLocations = result;
    }, error => {
      console.log(error.status);
    })

  }

}
