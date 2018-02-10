
import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Create } from './create/create.model';
import { Society } from '../society/societies.model';

@Injectable()
export class CreateService {

  constructor(private http: Http){ }
createEvent(create:Create){
  const body = JSON.stringify(create);
  const headers = new Headers({ 'Content-Type': 'application/json'});
  return this.http.post('http://localhost:3000/society/create',body,{headers: headers})
    .map((response: Response)=>response.json())
    .catch((error: Response)=>Observable.throw(error.json));
}
}
