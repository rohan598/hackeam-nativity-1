import { Component, OnInit,AfterViewInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { User} from '../shared/models/users.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit{
  user: User;
  loaded:boolean =false;
  constructor(private authService:AuthService,private userService:UserService) { }

  ngAfterViewInit() {
    this.userService.getUserData()
    .subscribe((user:User) => {
      this.user = user
      this.loaded = true;
    });
  }

  // onLogout(){
  //   this.authService.logout();
  // }
}
