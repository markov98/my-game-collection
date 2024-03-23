import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGamesComponent } from './all-games/all-games.component';
import { AddGameComponent } from './add-game/add-game.component';

const routes: Routes = [
  {
    path: 'games', children: [
      { path: '', pathMatch: 'full', component: AllGamesComponent },
      { path: 'add', component: AddGameComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
