import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { SignupPageComponent } from '../signup-page/signup-page.component';
import { DefaultAuthComponent } from './default-auth/default-auth.component';

const routes: Routes = [
    {
        path: 'auth',
        component: DefaultAuthComponent,
        children: [
            {
                path: 'login',
                component: LoginpageComponent
            }, 
            {
                path: 'signup',
                component: SignupPageComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
