import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppDataGuard} from '../../guards/app-data.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path:      'home',
    component: HomePage,
    canActivate: [AppDataGuard],
    children:  [
      {
        path: 'players',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../players/players.module').then(m => m.PlayersPageModule)
          }
        ]
      },
      {
        path: 'games',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../games/games.module').then(m => m.GamesModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gametypes/gametypes.module').then(m => m.GameTypesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/players',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/games',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
