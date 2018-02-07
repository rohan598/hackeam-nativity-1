import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

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
// import { CreateFormComponent } from './create-form/create-form.component';

const appRoutes :Routes = [
  { path: '' , redirectTo:'/overview', pathMatch: 'full'},
   // {path: '' , outlet: "NavbarComponent", component: NavbarComponent},
  { path: 'overview', component:OverviewComponent},
  { path: 'howtouse', component:HowToUseComponent },
  { path: 'aboutus',component:AboutUsComponent},
  { path: 'signup',component:SignupComponent, children:[
    { path: 'society/new' , component:SignupSocietyComponent},
    { path: 'user/new' , component:SignupUserComponent}
  ]},

  { path: 'signin',component:SigninComponent, children:[
    { path: 'society/:id' , component:SigninSocietyComponent},
    { path: 'user/:id' , component:SigninUserComponent}
  ]}
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule {

}
