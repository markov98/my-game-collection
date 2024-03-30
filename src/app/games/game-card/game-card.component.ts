import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnChanges {
  @Input() game!: [string, Game];
  gameInfo: Game = {} as Game;
  gameId: string = '';

  get userId(): string | undefined {
    return this.userService.user?.uid;
  }

  constructor(private userService: UserService, private apiService: ApiService) { }

  delete(): void {
    if (!this.gameInfo || this.gameInfo.uploaderId !== this.userService.user?.uid) {
      return;
    }

    const confirmDelete = confirm("Delete this game?");
    if (confirmDelete) {
      this.apiService.deleteGame(this.gameId).subscribe(() => { });
    }
  }

  ngOnChanges(): void {
    if (this.game) {
      [this.gameId, this.gameInfo] = this.game;
    }
  }
}