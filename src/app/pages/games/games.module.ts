import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ComponentsModule} from '../../components/components.module';
import { GamesPage } from './games.page';

@NgModule({
            imports: [
              IonicModule,
              CommonModule,
              FormsModule,
              RouterModule.forChild([{path: '', component: GamesPage}]),
              ComponentsModule
            ],
  declarations: [GamesPage]
})
export class GamesModule {}
