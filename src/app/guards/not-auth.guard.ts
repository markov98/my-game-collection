import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NotAuthActivate implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> { 
    return this.userService.idToken$.pipe(
      map(() => {
        if (this.userService.isLogged) {
          return this.router.createUrlTree(['/error']);
        } else {
          return true;
        }
      })
    );
  }
}