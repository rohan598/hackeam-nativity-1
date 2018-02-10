import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


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
import { EventsComponent } from './shared/upcoming-events/events/events.component';

// user
import { UserComponent } from './user/user.component';
import { MyEventsUserComponent } from './user/my-events-user/my-events-user.component';
// import { MySocitiesComponent} from './user/my-societies/my-societies.component';
import { SideBarUserComponent } from './user/side-bar-user/side-bar-user.component';

//society
import { SocietyComponent } from './society/society.component';
import { MyEventsSocietyComponent } from './society/my-events-society/my-events-society.component';
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


//google maps
import {} from '@types/googlemaps';
import {AppRoutingModule } from './app-routes.module';

//services
import { AuthService } from './shared/auth.service';
import { ToggleService } from './shared/toggle.service';
import { CreateService } from './shared/create.service';
import { SocietyService } from './shared/society.service';
import { UserService } from './shared/user.service';
import { AuthGuard } from './shared/auth-guard.service';
import { TokenInterceptor } from './shared/token.interceptor';
import { EventService } from './shared/event.service';
// import { JwtInterceptor } from './shared/jwt.interceptor';
// validation
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarInComponent,
    NavbarOutComponent,
    AboutUsComponent,
    HowToUseComponent,
    OverviewComponent,
    CreateComponent,
    UserComponent,
    // MySocitiesComponent,
    SideBarUserComponent,
    MyEventsUserComponent,
    SocietyComponent,
    // MyMembersComponent,
    SideBarSocietyComponent,
    MyEventsSocietyComponent,
    UpcomingEventsComponent,
    EventsComponent,
    SignupComponent,
    SignupUserComponent,
    SignupSocietyComponent,
    SigninComponent,
    SigninUserComponent,
    SigninSocietyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAuTFz2m3mOkCEom6alCedPumQmQcxwgFw',
      libraries:["places"]
    })
  ],
  providers: [AuthService,ToggleService,DatePipe,UserService,SocietyService,CreateService,EventService,AuthGuard,
    {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
