import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
  games : [string, Game][] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGames().subscribe(result => {
      this.games = Object.entries(result);
      console.log(this.games);
      
    } );
  }
}
