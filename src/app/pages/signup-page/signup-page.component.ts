import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  isLoading: boolean = false
  ngOnInit(): void {
  }
  onSignupButtonClicked(email:string, password:string) {
    this.isLoading = true
    this.authService.signup(email, password).subscribe((res: HttpResponse<any>)=>{
      if(res.status === 200) {
        //logged in
        this.router.navigate(['/lists']);
      }
    }, (error)=>{
        this.isLoading = false
        alert('Cannot sign in')
    })
  }
}
