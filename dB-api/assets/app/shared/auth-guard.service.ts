
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard {
  constructor(private authService: AuthService,private router:Router) {}
  canActivate(route :ActivatedRouteSnapshot,
  state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/signin']);
    }
  }
}
