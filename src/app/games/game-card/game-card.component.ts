import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() game!: [string, Game];
  gameInfo: Game = {} as Game;
  gameId: string = '';
  userId: string | undefined = this.userService.user?.uid;

  constructor(private userService: UserService, private apiService: ApiService) { }

  // Initialize the gameInfo and gameId properties when the input changes
  ngOnChanges(): void {
    if (this.game) {
      this.gameInfo = this.game[1];
      this.gameId = this.game[0];
    }
  }
}