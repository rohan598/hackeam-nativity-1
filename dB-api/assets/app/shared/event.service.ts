
import { Injectable } from '@angular/core';
// import { Http,Headers,Response } from '@angular/http';
import { HttpClient,HttpParams,HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Create } from './create/create.model';

@Injectable()
export class EventService {

    private creates: Create[];
    constructor(private http: HttpClient){ }
    // get user data
    getAllEventsData(){
    return this.http.get('http://localhost:3000/society/upcomingevents',{observe:'response',responseType:'json'
  })
      .map((events)=>{
        let tempObj = JSON.parse((JSON.stringify(events.body)));
        let temp = Array.prototype.slice.call(tempObj.obj);
        console.log(JSON.parse(JSON.stringify(temp)));
        let arr = [];
        temp.forEach((event)=>{
            arr.push({
              name:event.name,
               from:event.from,
               to:event.to,
               description:event.description,
               background:event.background ,
               hashtags:event.hashtags,
                events:event.events,
               register:event.register,
               links: event.profile,
               speakers:event.speakers,
               sponsors:event.sponsors,
               phone1:event.phone1,
               phone2:event.phone2,
               address:event.address,
               id:event.id
            });
            console.log('loop');
        });
        this.creates =arr;
        return this.creates;
      })
      .catch((error: Response)=>Observable.throw(error.json));
  }

  getSocietyEventData(){
    return this.http.get('http://localhost:3000/society/myeventssociety',{observe:'response',responseType:'json',
    params:new HttpParams().set('id',localStorage.getItem('societyId'))
  })
      .map((events)=>{
        let tempObj = JSON.parse((JSON.stringify(events.body)));
        let temp = Array.prototype.slice.call(tempObj.obj);
        console.log(JSON.parse(JSON.stringify(temp)));
        let arr = [];
        temp.forEach((event)=>{
            arr.push({
              name:event.name,
               from:event.from,
               to:event.to,
               description:event.description,
               background:event.background ,
               hashtags:event.hashtags,
                events:event.events,
               register:event.register,
               links: event.profile,
               speakers:event.speakers,
               sponsors:event.sponsors,
               phone1:event.phone1,
               phone2:event.phone2,
               address:event.address,
               id:event.id
            });
            console.log('loop');
        });
        return arr;
      })
      .catch((error: Response)=>Observable.throw(error.json));
  }

}
