
import { Injectable } from '@angular/core';
// import { Http,Headers,Response } from '@angular/http';
import { HttpClient,HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Create } from './create/create.model';

@Injectable()
export class EventService {

    private creates: Create[];
    constructor(private http: HttpClient){ }
    // get user data
    getEventData(){
    return this.http.get<Create[]>('http://localhost:3000/society/myeventssociety')
      .map((creates)=>{
        for(let create of creates){
            this.creates.push(create);
        }
      })
      .catch((error: Response)=>Observable.throw(error.json));
  }

}
