import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  isLoading: boolean = false
  ngOnInit(): void {
  }
  onLoginButtonClicked(email:string, password:string) {
    this.isLoading = true
    this.authService.login(email, password).subscribe((res: HttpResponse<any>)=>{
      if(res.status === 200) {
        //logged in
        this.router.navigate(['/lists']);
      }
    }, (error)=>{
        this.isLoading = false
        alert('Cannot log in')
    })
  }

}
