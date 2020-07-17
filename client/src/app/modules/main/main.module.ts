import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    DashboardPage,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class MainModule { }
