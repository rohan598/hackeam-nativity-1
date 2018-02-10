import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-navbar-out',
  templateUrl: './navbar-out.component.html',
  styleUrls: ['./navbar-out.component.css']
})
export class NavbarOutComponent {

  object: string;
  constructor(private authService:AuthService,private router:Router) { }
  ngOnInit(){
    // this.object = this.authService.object();
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/overview']);
  }
}
