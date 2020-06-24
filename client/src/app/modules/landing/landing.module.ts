import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LandingRoutingModule } from './landing-routing.module';
import { HomePage } from './pages/home/home.page';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
