import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  msg: string = this.userService.isLogged ? 'Hello User' : 'Hello Guest'

  constructor(private userService: UserService) { };

}
