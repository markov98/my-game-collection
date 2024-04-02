import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { Game } from 'src/app/types/game';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  game: Game = {} as Game;
  gameId: string = '';

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  delete(): void {
    this.apiService.deleteGame(this.gameId).subscribe(() => { this.router.navigate(['/games']) })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = params['gameId'];
      this.apiService.getGame(this.gameId).subscribe((game: any) => {
        this.game = game;

        if (!this.game || this.game.uploaderId !== this.userService.user?.uid) {
          this.router.navigate(['/error']);
          return;
        }



      })
    });
  }
}
