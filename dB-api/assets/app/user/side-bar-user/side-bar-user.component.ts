import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/users.model';

@Component({
  selector: 'app-side-bar-user',
  templateUrl: './side-bar-user.component.html',
  styleUrls: ['./side-bar-user.component.css']
})
export class SideBarUserComponent implements OnInit {
  @Input('user') user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
      console.log(this.user.email);
      }

}
