import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppDataGuard} from './guards/app-data.guard';
import {ROUTES} from './model/consts';

const routes: Routes = [
  {
    path:         '',
    canActivate:  [AppDataGuard],
    loadChildren: () => import('./pages/home/home.module').then(m => m.TabsPageModule)
  },
  {
    path:         ROUTES.GAME.URL,
    canActivate:  [AppDataGuard],
    loadChildren: () => import('./pages/game/game.module').then(m => m.GamePageModule)
  },
  {
    path:         ROUTES.PLAYER.URL,
    canActivate:  [AppDataGuard],
    loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerPageModule)
  },
  { path: '',   redirectTo: '/home/games', pathMatch: 'full' },
  { path: '**', redirectTo: '/home/games'
  }
];

@NgModule({
            imports: [
              RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
            ],
            exports: [RouterModule]
          })
export class AppRoutingModule {}
