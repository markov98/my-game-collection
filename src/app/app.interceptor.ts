import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.userService.token) {
        const modifiedUrl = req.url + `?auth=${this.userService.token}`;
        const modifiedReq = req.clone({
            url: modifiedUrl
        })

        return next.handle(modifiedReq);
    } else {
        return next.handle(req);
    }
  }
}