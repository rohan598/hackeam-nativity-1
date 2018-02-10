
import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/users.model';
import { Society } from '../society/societies.model';
import {tokenNotExpired } from "angular2-jwt"

@Injectable()
export class AuthService {
  token:string;
  isUser: boolean =false;
  isSociety: boolean=false;
  obj:string ='';
  // jwtHelper: JwtHelper = new JwtHelper();
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

  public getToken(): string {
  return localStorage.getItem('token');
}
public isAuthenticated(): boolean {
 // get the token
 // const token = this.getToken();
 // return a boolean reflecting
 // whether or not the token is expired
 return localStorage.getItem('token')!=null;
}

  truthyUser(){
    this.isUser = true;
  }
  truthySociety(){
    this.isSociety = true;
  }
  object(){
    if(this.isUser){
      this.obj="user";
    }else if(this.isSociety){
        this.obj="society";
    }
    return this.obj;

  }
}
