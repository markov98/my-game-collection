import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service: UserService, private router: Router) { };

  register(form: NgForm): void {
    if (form.value.password !== form.value['re-password']) {
      return;
    }

    if (form.invalid) {
      return;
    }

    const {email, username, password} = form.value;

    this.service.register(email, username, password).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
