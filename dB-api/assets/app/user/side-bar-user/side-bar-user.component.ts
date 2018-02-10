import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../shared/user.service';
import { User } from '../users.model';

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
