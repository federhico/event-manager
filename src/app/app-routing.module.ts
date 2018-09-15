import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const ROUTES:Routes =[
  {path:'', component:AppComponent} 
]

@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(ROUTES)] 
})

export class AppRoutingModule {

 

 }
