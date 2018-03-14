import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { CreateEventsComponent } from './shared/create-events/create-events.component';
import { UpcomingEventsComponent } from './shared/upcoming-events/upcoming-events.component';
import { EventsComponent } from './shared/upcoming-events/events/events.component';

// user
import { UserComponent } from './user/user.component';
import { MyEventsUserComponent } from './user/my-events-user/my-events-user.component';
import { EventsUserComponent } from './user/my-events-user/events-user/events-user.component';
// import { MySocitiesComponent} from './user/my-societies/my-societies.component';
import { SideBarUserComponent } from './user/side-bar-user/side-bar-user.component';

//society
import { SocietyComponent } from './society/society.component';
import { MyEventsSocietyComponent } from './society/my-events-society/my-events-society.component';
import { EventsSocietyComponent } from './society/my-events-society/events-society/events-society.component';
// import { MyMembersComponent } from './society/my-members/my-members.component';
import { SideBarSocietyComponent } from './society/side-bar-society/side-bar-society.component';

//signup
import { SignupComponent } from './signup/signup.component';
import { SignupUserComponent } from './signup/signup-user/signup-user.component';
import { SignupSocietyComponent } from './signup/signup-society/signup-society.component';

//signin
import { SigninComponent } from './signin/signin.component';
import { SigninUserComponent } from './signin/signin-user/signin-user.component';
import { SigninSocietyComponent } from './signin/signin-society/signin-society.component';
//auth-guard
import { AuthGuard } from './shared/services/auth-guard.service';
//Error
import { ErrorPageComponent } from './error-page/error-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  // {path: '' , outlet: "NavbarComponent", component: NavbarComponent},
  { path: 'overview', component: OverviewComponent },
  { path: 'howtouse', component: HowToUseComponent },
  { path: 'aboutus', component: AboutUsComponent },

  {
    path: 'register', component: SignupComponent, children: [
      { path: 'society', component: SignupSocietyComponent },
      { path: 'user', component: SignupUserComponent }, /// change name
    ]
  },
  {
    path: 'auth', component: SigninComponent, children: [
      { path: 'society', component: SigninSocietyComponent },
      { path: 'user', component: SigninUserComponent }
    ]
  },
  { path: 'show/user/:id', component: UserComponent, children: [] },
  { path: 'show/society', component: SocietyComponent },
  {
    path: 'show/society/:id', component: SocietyComponent, children: [
      { path: 'event/new', component: CreateEventsComponent },
      { path: 'myevents', component: MyEventsSocietyComponent },
      { path: 'upcomingevents', component: UpcomingEventsComponent },
    ]
  },
  { path: 'show/upcomingevents', component: UpcomingEventsComponent },
  // { path: 'user' ,component:UserComponent,children:[
  //   { path: 'myeventsuser',component:MyEventsUserComponent},
  //   { path: 'upcomingevents', component:UpcomingEventsComponent },
  //   // { path: 'mysocities',component:MySocitiesComponent},
  // ]},
  // { path: 'society' ,component:SocietyComponent,children:[
  //   { path: 'myeventssociety',component:MyEventsSocietyComponent},
  //   { path: 'upcomingevents', component:UpcomingEventsComponent },
  //   // { path: 'mymembers',component:MyMembersComponent},
  //     { path: 'create', component:CreateComponent }
  // ]},

  // { path: 'signup',component:SignupComponent, children:[
  //   { path: 'society' , component:SignupSocietyComponent},
  //   { path: 'user' , component:SignupUserComponent}
  // ]},
  // { path: 'signin',component:SigninComponent, children:[
  //   { path: 'society' , component:SigninSocietyComponent},
  //   { path: 'user' , component:SigninUserComponent}
  // ]},
  // {
  //   path:'upcomingevents',component:UpcomingEventsComponent
  // },
  // {
  //   path:'webpage', redirectTo:''
  // },
  // { path: 'myeventssociety',component:MyEventsSocietyComponent},
  { path: '**', component: ErrorPageComponent }
  // {path: 'events', component: EventsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
