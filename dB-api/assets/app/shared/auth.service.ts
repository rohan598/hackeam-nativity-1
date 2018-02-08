
import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/users.model';

export class AuthService {

  constructor(private http: Http){ }

  signup(user :User){
    const body = JSON.stringify(user);
    const headers = new Headers ({ 'content-type': 'application/json'});
    return this.http.post('http://localhost:3000/user',body,{headers: headers})
      .map((response: Response)=>response.json())
      .catch((err: Response)=>Observable.throw(err.json));
  }
}
