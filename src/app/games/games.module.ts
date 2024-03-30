import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './all-games/all-games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { AddGameComponent } from './add-game/add-game.component';
import { GamesRoutingModule } from './games-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GameCardComponent } from './game-card/game-card.component';



@NgModule({
  declarations: [
    AllGamesComponent,
    GameDetailsComponent,
    EditGameComponent,
    AddGameComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule
  ]
})
export class GamesModule { }
