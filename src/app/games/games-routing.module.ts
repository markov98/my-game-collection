import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGamesComponent } from './all-games/all-games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { AuthActivate } from '../guards/auth.guard';
import { DeleteComponent } from './delete/delete.component';
import { EditGameComponent } from './edit-game/edit-game.component';

const routes: Routes = [
  {
    path: 'games', children: [
      { path: '', pathMatch: 'full', component: AllGamesComponent },
      { path: 'add', component: AddGameComponent, canActivate: [AuthActivate] },
      { path: ':gameId/delete', component: DeleteComponent, canActivate: [AuthActivate] },
      { path: ':gameId/edit', component: EditGameComponent, canActivate: [AuthActivate] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
