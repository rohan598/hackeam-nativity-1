import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginSocietyComponent } from './login/login-society/login-society.component';
import { CreateFormComponent } from './create-form/create-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LoginUserComponent,
    LoginSocietyComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
