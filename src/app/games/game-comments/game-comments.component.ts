import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Comment } from 'src/app/types/coment';
import { Game } from 'src/app/types/game';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-game-comments',
  templateUrl: './game-comments.component.html',
  styleUrls: ['./game-comments.component.css']
})
export class GameCommentsComponent implements OnInit {
  game: Game = {} as Game;
  gameId: string = '';
  comments: Comment[] = [];

  get canComment(): boolean {
    return this.userService.isLogged;
  }

  form: FormGroup = this.formBuilder.group({
    newComment: ['', Validators.required]
  })

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
        if (!game) {
          this.router.navigate(['/error']);
        } else {
          this.game = game;
          this.comments = Object.values(this.game.comments) || [];
        }
      })
    });
  }

  addComment() {
    this.apiService.addComment(this.gameId, this.form.value.newComment).subscribe(() => {
      this.comments.push({
        commenterId: this.userService.user?.uid,
        commenterEmail: this.userService.user?.email,
        content: this.form.value.newComment
      })
      
      this.form.reset();
    })
  }

}
