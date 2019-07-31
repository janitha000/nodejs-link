import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { WeatherHomeComponent } from './weather/weather-home/weather-home.component';
import { LinkHomeComponent } from './link/link-home/link-home.component';
import { HomeComponent } from './home/home/home.component';
import { SingleWeatherComponent } from './weather/single-weather/single-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherHomeComponent,
    LinkHomeComponent,
    HomeComponent,
    SingleWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
