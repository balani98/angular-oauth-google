import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,
              private router:Router,
              private authService: SocialAuthService
              ) { }
   private user: SocialUser;
   private loggedIn: boolean;
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("user",this.user)
      });
  }
 
 async signInWithGoogle() {
    let res = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    if(res){
      localStorage.setItem('idToken',res['idToken'])
      this.router.navigate(['home'])
    }
  }
  login(formObject){
      this.http.post('http://localhost:5000/login',formObject).subscribe((res)=>{
        localStorage.setItem('Authorization',`Bearer ${res['token']}`)
        if(res['success']==true)
          this.router.navigate(['home']);
        
      })
  }
  

}
