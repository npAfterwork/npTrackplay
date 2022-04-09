import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppDataGuard} from '../../guards/app-data.guard';

import { GamePage } from './game.page';

const routes: Routes = [
  {
    path: '',
    component: GamePage,
    canActivate: [AppDataGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamePageRoutingModule {}
