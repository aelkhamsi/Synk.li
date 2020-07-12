import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { HeaderComponent } from './components/header/header.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { SignupBoxComponent } from './components/signup-box/signup-box.component';



@NgModule({
  declarations: [
    LoginPage, 
    SignupPage, 
    HeaderComponent, 
    LoginBoxComponent, SignupBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
