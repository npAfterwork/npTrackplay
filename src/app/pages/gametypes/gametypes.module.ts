import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ComponentsModule} from '../../components/components.module';
import { GameTypesPage } from './game-types-page.component';

@NgModule({
            imports: [
              IonicModule,
              CommonModule,
              FormsModule,
              RouterModule.forChild([{path: '', component: GameTypesPage}]),
              ComponentsModule
            ],
  declarations: [GameTypesPage]
})
export class GameTypesPageModule {}
