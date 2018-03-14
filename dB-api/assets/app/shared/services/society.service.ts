
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Society } from '../models/societies.model';
import { AuthService } from './auth.service';

@Injectable()
export class SocietyService {

  private society:Society;
  private id:string;
  private url:string;
  constructor(private http: HttpClient,
              private authService:AuthService){ }

  ngOnInit(){
    this.id = localStorage.getItem('societyId');
    this.url = 'http://localhost:3000/show/society/'+this.id;
  }

  getData(){
  return this.http.get(this.url,{observe:'response',responseType:'json'
})
    .map((society)=>{
      let tempObj = JSON.parse((JSON.stringify(society.body)));
      console.log(JSON.parse(JSON.stringify(tempObj.obj)));
      return tempObj.obj;
    })
    .catch((error: Response)=>Observable.throw(error.json));
}


}
