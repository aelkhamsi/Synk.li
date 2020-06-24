import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    LoginPage, 
    SignupPage, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
