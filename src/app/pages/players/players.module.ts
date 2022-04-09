import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ComponentsModule} from '../../components/components.module';
import { PlayersPage } from './players.page';

@NgModule({
            imports: [
              IonicModule,
              CommonModule,
              FormsModule,
              RouterModule.forChild([{path: '', component: PlayersPage}]),
              ComponentsModule
            ],
  declarations: [PlayersPage]
})
export class PlayersPageModule {}
