
import { Injectable,OnInit } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Events } from '../models/events.model';
import { Society } from '../models/societies.model';

@Injectable()
export class CreateEventsService {

    private id:string;
  private url:string;
  constructor(private http: Http){ }
  ngOnInit(){
    this.id = localStorage.getItem('societyId');
    this.url = 'http://localhost:3000/show/society/'+this.id;
  }
  createEvent(events:Events){
  const body = JSON.stringify(events);
  const headers = new Headers({ 'Content-Type': 'application/json'});
  return this.http.post(this.url+'/event',body,{headers: headers})
    .map((response: Response)=>response.json())
    .catch((error: Response)=>Observable.throw(error.json));
}
}
