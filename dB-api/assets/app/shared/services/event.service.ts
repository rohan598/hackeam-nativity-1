
import { Injectable } from '@angular/core';
// import { Http,Headers,Response } from '@angular/http';
import { HttpClient,HttpParams,HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Events } from '../models/events.model';
import { AuthService } from './auth.service';

@Injectable()
export class EventService {

    private events:Events[];
    private id:string;
    private url:string;
    constructor(private http: HttpClient,
                private authService:AuthService){ }

    ngOnInit(){
    this.id = localStorage.getItem('societyId');
      this.url = 'http://localhost:3000/show/society/'+this.id;
    }
    // get event through society data
    getEventsDataSociety(){
    return this.http.get(this.url+'/myevents',{observe:'response'});

  }

  // get all events
  getAllEventsData(){
  console.log("in service");
  return this.http.get('http://localhost:3000/show/upcomingevents',{observe:'response'});
    // .catch((error: Response)=>Observable.throw(error.json));
}
// getEventData(id:string = localStorage.getItem('societyId')){
//   return this.http.get('http://localhost:3000/myeventssociety',{observe:'response',responseType:'json',
//   params:new HttpParams().set('id',id)
// })
//     .map((events)=>{
//       let tempObj = JSON.parse((JSON.stringify(events.body)));
//       let temp = Array.prototype.slice.call(tempObj.obj);
//       console.log(JSON.parse(JSON.stringify(temp)));
//       let arr = [];
//       temp.forEach((event)=>{
//           arr.push({
//             name:event.name,
//              from:event.from,
//              to:event.to,
//              description:event.description,
//              background:event.background ,
//              hashtags:event.hashtags,
//               events:event.events,
//              register:event.register,
//              links: event.profile,
//              speakers:event.speakers,
//              sponsors:event.sponsors,
//              phone1:event.phone1,
//              phone2:event.phone2,
//              address:event.address,
//              id:event.id
//           });
//           console.log('loop');
//       });
//       return arr;
//     })
//     .catch((error: Response)=>Observable.throw(error.json));
// }

}
