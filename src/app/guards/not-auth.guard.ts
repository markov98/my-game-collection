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
export class NotAuthActivate implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> { 
    return new Observable<boolean>((observer) => {
      this.userService.idToken$.subscribe(() => {
        if (this.userService.isLogged) {
          this.router.navigate(['/']);
          observer.next(false);
        } else {
          observer.next(true);
        }
        observer.complete();
      });
    });
  }
}