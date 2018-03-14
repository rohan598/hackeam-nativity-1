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


//google maps
import { } from '@types/googlemaps';
import { AppRoutingModule } from './app-routes.module';

//services
import { AuthService } from './shared/services/auth.service';
import { ToggleService } from './shared/services/toggle.service';
import { CreateEventsService } from './shared/services/create-events.service';
import { SocietyService } from './shared/services/society.service';
import { UserService } from './shared/services/user.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { EventService } from './shared/services/event.service';

//interceptors
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
// import { JwtInterceptor } from './shared/jwt.interceptor';
// validation
import { CustomFormsModule } from 'ng2-validation';
//Error
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarInComponent,
    NavbarOutComponent,
    AboutUsComponent,
    HowToUseComponent,
    OverviewComponent,
    EventsComponent,
    UserComponent,
    // MySocitiesComponent,
    SideBarUserComponent,
    MyEventsUserComponent,
    SocietyComponent,
    // MyMembersComponent,
    SideBarSocietyComponent,
    MyEventsSocietyComponent,
    UpcomingEventsComponent,
    CreateEventsComponent,
    SignupComponent,
    SignupUserComponent,
    SignupSocietyComponent,
    SigninComponent,
    SigninUserComponent,
    SigninSocietyComponent,
    ErrorPageComponent
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
      apiKey: 'AIzaSyAuTFz2m3mOkCEom6alCedPumQmQcxwgFw',
      libraries: ["places"]
    })
  ],
  providers: [AuthService, ToggleService, DatePipe, UserService, SocietyService, CreateEventsService,
    EventService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
