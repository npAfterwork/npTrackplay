import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ComponentsModule} from '../../components/components.module';

import { PlayerPageRoutingModule } from './player-routing.module';

import { PlayerPage } from './player.page';

@NgModule({
            imports: [
              CommonModule,
              FormsModule,
              IonicModule,
              PlayerPageRoutingModule,
              ComponentsModule
            ],
  declarations: [PlayerPage]
})
export class PlayerPageModule {}
