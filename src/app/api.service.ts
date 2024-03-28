import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import { Game } from './types/game';
import { UserService } from './user/user.service';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = env.url;

  constructor(private http: HttpClient, private userService: UserService) { }

  // GAMES

  addGame(gameData: Object) {
    return from(this.userService.getIdToken()).pipe(
      switchMap(token => {
        return this.http.post(`${this.url}games/.json?auth=${token}`, gameData);
      })
    );
  }
}
