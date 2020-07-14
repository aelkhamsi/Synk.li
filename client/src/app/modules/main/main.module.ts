import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
