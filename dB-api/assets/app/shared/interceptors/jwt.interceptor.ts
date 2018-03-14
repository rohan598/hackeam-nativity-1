// import 'rxjs/add/operator/do';
// import {Router} from '@angular/router';
// import { HttpClient,HttpInterceptor,HttpResponse,HttpErrorResponse,HttpRequest,HttpEvent,HttpHandler} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
// import {AuthService} from './auth.service';
// import {Injectable} from '@angular/core';
// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//
//   constructor(public auth: AuthService,private router:Router) {}
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//     return next.handle(request).do((event: HttpEvent<any>) => {
//       if (event instanceof HttpResponse) {
//         // do stuff with response if you want
//         console.log('Successful requets');
//       }
//     }, (err: any) => {
//       if (err instanceof HttpErrorResponse) {
//         if (err.status === 401) {
//           console.log('unsuccessful requets');
//           // redirect to the login route
//           // or show a modal
//           // this.router.navigate(['/signin']);
//         }
//       }
//     });
//   }
// }
