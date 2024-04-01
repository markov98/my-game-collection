import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> { 
    return new Observable<boolean>((observer) => {
      this.userService.idToken$.subscribe(() => {
        if (this.userService.isLogged) {
          observer.next(true);
        } else {
          observer.next(true);
          this.router.navigate(['/error'])
        }
        observer.complete();
      });
    });
  }
}