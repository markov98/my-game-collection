import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotAuthActivate } from '../guards/not-auth.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthActivate] },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthActivate] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
