import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { SignupPageComponent } from '../signup-page/signup-page.component';
import { DefaultAuthComponent } from './default-auth/default-auth.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';



@NgModule({
  declarations: [LoginpageComponent, SignupPageComponent, DefaultAuthComponent],
  imports: [
    CommonModule, 
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
