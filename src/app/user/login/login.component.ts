import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  err: boolean = false;
  constructor(private service: UserService) { };

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.service.login(email, password)
      .then((userCred) => console.log('hey'))
      .catch((err) => this.err = true);
  }
}
