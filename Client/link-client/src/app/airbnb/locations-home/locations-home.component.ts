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
  constructor(private service : AirbnbService, private location : Location, private router : Router) { }

  ngOnInit() {
    this.service.getTopReviewLocations().subscribe(result => {
      this.TopLocations = result;
      console.log(result);
    }, error => {
      if(error.status == 401){
      // this.router.navigate(['/login']);
      }
      console.log(error.status);
    })
  }

}
