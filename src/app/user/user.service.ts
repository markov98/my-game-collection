import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = 'https://my-game-collection-5150f-default-rtdb.europe-west1.firebasedatabase.app/users/.json';

  constructor(private http: HttpClient) { }

  register(email: string, username: string, password: string) {
    console.log(email,username,password);
    
    return this.http.post<User>(this.url, {email, username, password})
  }
}
