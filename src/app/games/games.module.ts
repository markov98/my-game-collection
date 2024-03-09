import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './all-games/all-games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { AddGameComponent } from './add-game/add-game.component';



@NgModule({
  declarations: [
    AllGamesComponent,
    GameDetailsComponent,
    EditGameComponent,
    AddGameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
