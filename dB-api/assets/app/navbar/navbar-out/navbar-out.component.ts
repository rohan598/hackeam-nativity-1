import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-navbar-out',
  templateUrl: './navbar-out.component.html',
  styleUrls: ['./navbar-out.component.css']
})
export class NavbarOutComponent {

  societyId: string;
  constructor(private authService:AuthService,private router:Router) { }
  ngOnInit(){
    this.societyId = localStorage.getItem('societyId');
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/overview']);
  }
}
