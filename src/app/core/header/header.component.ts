import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get user() : string {
    return this.userService.user?.email || "Guest";
  }

  constructor(private userService: UserService, private router: Router) { };

  logout(): void {
    this.userService.logout()
      .then(() => this.router.navigate(['/']))
      .catch(err => alert(err));
  }
}
