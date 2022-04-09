import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ScorePipe} from '../pipes/score.pipe';
import {GameEditComponent} from './game-edit/game-edit.component';
import {GameListComponent} from './game-list/game-list.component';
import {GameSettingsComponent} from './game-settings/game-settings.component';
import {GameTypeEditComponent} from './game-type-edit/game-type-edit.component';
import {GameTypeListComponent} from './game-type-list/game-type-list.component';
import {PlayerEditComponent} from './player-edit/player-edit.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayerSelectComponent} from './player-select/player-select.component';


@NgModule({
            imports:         [
              CommonModule,
              FormsModule,
              IonicModule,
            ],
            // tslint:disable-next-line:max-line-length
            declarations:    [GameSettingsComponent, ScorePipe, PlayerSelectComponent, GameListComponent, GameTypeListComponent, GameTypeEditComponent, PlayerListComponent, PlayerEditComponent, GameEditComponent],
            // tslint:disable-next-line:max-line-length
            exports:         [GameSettingsComponent, ScorePipe, PlayerSelectComponent, GameListComponent, GameTypeListComponent, GameTypeEditComponent, PlayerListComponent, PlayerEditComponent, GameEditComponent],
            entryComponents: [GameSettingsComponent, PlayerSelectComponent, GameTypeEditComponent, PlayerEditComponent, GameEditComponent]
          })
export class ComponentsModule {}
