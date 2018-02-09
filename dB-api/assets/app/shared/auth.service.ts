
import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/users.model';
import { Society } from '../society/societies.model';

@Injectable()
export class AuthService {

  isUser: boolean =false;
  isSociety: boolean=false;
  constructor(private http: Http){ }

  signupUser(user :User){
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user',body,{headers: headers})
      .map((response: Response)=>response.json())
      .catch((error: Response)=>Observable.throw(error.json));
  }

  signupSociety(society :Society){
    const body = JSON.stringify(society);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/society',body,{headers: headers})
      .map((response: Response)=>response.json())
      .catch((error: Response)=>Observable.throw(error.json));
  }

  signinUser(user :User){
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/signin/user',body,{headers: headers})
      .map((response: Response)=>response.json())
      .catch((error: Response)=>Observable.throw(error.json));
  }
  signinSociety(society :Society){
    const body = JSON.stringify(society);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/signin/society',body,{headers: headers})
      .map((response: Response)=>
        response.json())
      .catch((error: Response)=>Observable.throw(error.json));
  }
  logout(){
      localStorage.clear();
      this.isUser = false;
      this.isSociety = false;
  }
  isLoggedIn(){
      return (localStorage.getItem('token') !== null);
  }
  truthyUser(){
    this.isUser = true;
  }
  truthySociety(){
    this.isSociety = true;
  }
  object(){
    if(this.isUser){
      return 'user';
    }
    return 'society';
  }
}
