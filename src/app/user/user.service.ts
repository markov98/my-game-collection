import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth , createUserWithEmailAndPassword} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private auth: Auth = inject(Auth)


  constructor(private http: HttpClient) { }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth ,email, password);
  }
}
