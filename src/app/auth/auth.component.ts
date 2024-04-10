import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  get isAuthenticating(): boolean {
    return this.userService.isAuthenticating;
  }

  constructor(private userService: UserService) { }
}
