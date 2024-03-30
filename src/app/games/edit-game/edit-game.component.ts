import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    year: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    developer: ['', Validators.required],
    imgUrl: ['', Validators.required]
  });

  game: Game = {} as Game;
  gameId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = params['gameId'];
      this.apiService.getGame(this.gameId).subscribe((game: any) => {
        if (game.uploaderId !== this.userService.user?.uid) {
          this.router.navigate(['/error']);
        } else {
          this.game = game;
        }
      })
    });
  }

  editGame() {
    if (this.form.invalid) {
      return;
    }

    console.log('test');
    

    const gameInfo = this.form.value;

    this.apiService.editGame(this.gameId, gameInfo)
      .subscribe(() => this.router.navigate(['/games']))
  }
}