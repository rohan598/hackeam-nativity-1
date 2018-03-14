
import { Injectable } from '@angular/core';
// import { Http,Headers,Response } from '@angular/http';
import { HttpClient,HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/users.model';

@Injectable()
export class UserService {

    private user: User;
    constructor(private http: HttpClient){ }
    // get user data
    getUserData(){
    return this.http.get<User>('http://localhost:3000/user',{
      params:new HttpParams().set('id',(localStorage.getItem('userId')))
    })
      .map((user)=>{
        console.log("getting data " + user.email);
        return user;
      })
      .catch((error: Response)=>Observable.throw(error.json));
  }

}
