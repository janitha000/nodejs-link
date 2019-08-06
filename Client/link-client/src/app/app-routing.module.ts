import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component'
import { WeatherHomeComponent } from './weather/weather-home/weather-home.component'
import { LinkHomeComponent } from './link/link-home/link-home.component'
import { SingleWeatherComponent } from './weather/single-weather/single-weather.component'
import { SingleLinkComponent } from './link/single-link/single-link.component'
import { SingleLinkCompanyComponent } from './link/single-link-company/single-link-company.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherHomeComponent },
  { path: 'link', component: LinkHomeComponent },
  { path: 'weather/:id', component: SingleWeatherComponent },
  { path: 'link/user/:name', component: SingleLinkComponent },
  { path: 'link/company/:name', component: SingleLinkCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
