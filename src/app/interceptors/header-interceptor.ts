import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { AuthService } from "../services/auth/auth.service";
import { Observable } from "rxjs/Observable";


// @Injectable()
// export class HeaderInterceptor implements HttpInterceptor {


//     private request: HttpRequest<any>;
//     private next: HttpHandler;

//     constructor(authService : AuthService){

//     }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         // this.auth = this.injector.get(AuthService);
//         // this.next = next;
//         // this.request = request;

//         // if (request.url.endsWith('adverts')) {
//         //     console.log('here')
//         //     return this.handleAdvertsRequests();
//         // }

//         // if (!this.auth.isAuthenticated()) {
//         //     return this.handleNoAuthRequests();
//         // }

//         // return this.handleAuthRequests();
//     }



// }