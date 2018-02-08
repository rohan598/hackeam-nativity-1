import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { HowToUseComponent } from './howtouse/howtouse.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { SignupUserComponent } from './signup/signup-user/signup-user.component';
import { SignupSocietyComponent } from './signup/signup-society/signup-society.component';
import { SigninComponent } from './signin/signin.component';
import { SigninUserComponent } from './signin/signin-user/signin-user.component';
import { SigninSocietyComponent } from './signin/signin-society/signin-society.component';
import { CreateFormComponent } from './create-form/create-form.component';

import {} from '@types/googlemaps';
import {AppRoutingModule } from './app-routes.module';
import { UserComponent } from './user/user.component';
import { SocietyComponent } from './society/society.component';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    HowToUseComponent,
    OverviewComponent,
    SignupComponent,
    SignupUserComponent,
    SignupSocietyComponent,
    SigninComponent,
    SigninUserComponent,
    SigninSocietyComponent,
    CreateFormComponent,
    UserComponent,
    SocietyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'#',
      libraries:["places"]
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
