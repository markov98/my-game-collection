import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private userService: UserService, private router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedReq = req;

    if (this.userService.token) {
      const modifiedUrl = req.url + `?auth=${this.userService.token}`;
      modifiedReq = req.clone({
        url: modifiedUrl
      })
    }

    return next.handle(modifiedReq).pipe(
      catchError((error) => {
        console.log(error);
        this.router.navigate(['/error']);
        return [error];
      })
    )
  }
}