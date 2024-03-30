import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import { Game } from './types/game';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = env.url;

  constructor(private http: HttpClient, private userService: UserService) { }

  // GAMES

  addGame(name: string, year: number, developer: string, imgUrl: string) {
    const game: Game = {
      name,
      year,
      developer,
      imgUrl,
      uploaderId: this.userService.user?.uid,
      comments: []
    }
    
    return this.http.post(`${this.url}games/.json`, game);
  };

  getGames() {
    return this.http.get(`${this.url}games/.json`);
  }

  deleteGame(gameId: string) {
    return this.http.delete(`${this.url}games/${gameId}/.json`)
  }
}
