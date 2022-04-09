import {Component} from '@angular/core';
import {IConfig, IGameType} from '../../model/model';
import {DataService} from '../../services/data.service';

@Component({
             selector:    'app-settings-page',
             templateUrl: 'game-types-page.component.html',
             styleUrls:   ['game-types-page.component.scss']
           })
export class GameTypesPage implements OnIonWillEnter {
  types: IGameType[];
  private config: IConfig;

  constructor(
    private readonly dataService: DataService
  ) {}

  async ionViewWillEnter() {
    this.types =  this.dataService.getGameTypes();
    this.config = this.dataService.config;
  }

}
