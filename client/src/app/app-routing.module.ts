import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RoomComponent } from './room/room.component';

  // {
  //   path: 'room/:id',
  //   component: RoomComponent
  // },
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
