import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { HeaderComponent } from './components/header/header.component';
import { RoomPage } from './pages/room/room.page';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';




@NgModule({
  declarations: [
    DashboardPage,
    HeaderComponent,
    RoomPage
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxYoutubePlayerModule.forRoot()
  ]
})
export class MainModule { }
