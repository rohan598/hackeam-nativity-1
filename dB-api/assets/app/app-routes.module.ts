import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//main
import { AppComponent } from './app.component';

//navbar
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarInComponent } from './navbar/navbar-in/navbar-in.component';
import { NavbarOutComponent } from './navbar/navbar-out/navbar-out.component';

//common
import { OverviewComponent } from './overview/overview.component';
import { HowToUseComponent } from './howtouse/howtouse.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { CreateComponent } from './shared/create/create.component';
import { UpcomingEventsComponent } from './shared/upcoming-events/upcoming-events.component';

// user
import { UserComponent } from './user/user.component';
import { MyEventsUserComponent } from './user/my-events-user/my-events-user.component';
import { MySocitiesComponent} from './user/my-societies/my-societies.component';
import { SideBarUserComponent } from './user/side-bar-user/side-bar-user.component';

//society
import { SocietyComponent } from './society/society.component';
import { MyEventsSocietyComponent } from './society/my-events-society/my-events-society.component';
import { MyMembersComponent } from './society/my-members/my-members.component';
import { SideBarSocietyComponent } from './society/side-bar-society/side-bar-society.component';

//signup
import { SignupComponent } from './signup/signup.component';
import { SignupUserComponent } from './signup/signup-user/signup-user.component';
import { SignupSocietyComponent } from './signup/signup-society/signup-society.component';

//signin
import { SigninComponent } from './signin/signin.component';
import { SigninUserComponent } from './signin/signin-user/signin-user.component';
import { SigninSocietyComponent } from './signin/signin-society/signin-society.component';




const appRoutes :Routes = [
  { path: '' , redirectTo:'/overview', pathMatch: 'full'},
   // {path: '' , outlet: "NavbarComponent", component: NavbarComponent},
  { path: 'overview', component:OverviewComponent},
  { path: 'howtouse', component:HowToUseComponent },
  { path: 'aboutus',component:AboutUsComponent},
  { path: 'signup',component:SignupComponent, children:[
    { path: 'society' , component:SignupSocietyComponent},
    { path: 'user' , component:SignupUserComponent}
  ]},
  { path: 'user' , component:UserComponent,children:[
    { path: 'myevents',component:MyEventsUserComponent},
    { path: 'upcomingevents', component:UpcomingEventsComponent },
    { path: 'mysocities',component:MySocitiesComponent},
      { path: 'create', component:CreateComponent }
  ]},
  { path: 'society' , component:SocietyComponent,children:[
    { path: 'myevents',component:MyEventsSocietyComponent},
    { path: 'upcomingevents', component:UpcomingEventsComponent },
    { path: 'mymembers',component:MyMembersComponent},
      { path: 'create', component:CreateComponent }
  ]},
  { path: 'signin',component:SigninComponent, children:[
    { path: 'society' , component:SigninSocietyComponent},
    { path: 'user' , component:SigninUserComponent}
  ]},

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
