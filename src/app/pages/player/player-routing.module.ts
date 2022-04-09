import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppDataGuard} from '../../guards/app-data.guard';

import {PlayerPage} from './player.page';

const routes: Routes = [
  {
    path:        '',
    component:   PlayerPage,
    canActivate: [AppDataGuard],
  }
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
          })
export class PlayerPageRoutingModule {}
