import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConnectionService } from './file/connection.service';
import { FileComponent } from './file/file.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { SafeUrlPipe } from './pipes/safeurl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    LandingPageComponent,
    FileComponent,
    LoginComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1092273835735-r8g86oktfl9cgmgnelanm8uvgtg41a3h.apps.googleusercontent.com'
            )
          },
         
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
