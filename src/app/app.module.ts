import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, ROUTES } from '@angular/router';
import { AuthService } from './services/auth.service';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
