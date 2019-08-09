import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { WeatherHomeComponent } from './weather/weather-home/weather-home.component';
import { LinkHomeComponent } from './link/link-home/link-home.component';
import { HomeComponent } from './home/home/home.component';
import { SingleWeatherComponent } from './weather/single-weather/single-weather.component';
import { SingleLinkComponent } from './link/single-link/single-link.component';
import { SingleLinkCompanyComponent } from './link/single-link-company/single-link-company.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {AuthInspector} from './interceptors/auth-inspector'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherHomeComponent,
    LinkHomeComponent,
    HomeComponent,
    SingleWeatherComponent,
    SingleLinkComponent,
    SingleLinkCompanyComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000
    })
  ],
  providers: [ {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInspector,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
