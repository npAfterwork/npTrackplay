import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {IConfig, IGameType} from '../../model/model';
import {DataService} from '../../services/data.service';

@Component({
             selector:    'app-game-settings',
             templateUrl: './game-settings.component.html',
             styleUrls:   ['./game-settings.component.scss'],
           })
export class GameSettingsComponent implements OnInit {

  @Input() mode: 'games' | 'players' | 'gamesForPlayer';

  config: IConfig;
  types: IGameType[];

  constructor(
    private readonly dataService: DataService,
    private readonly popoverController: PopoverController
  ) {
    this.refresh();
  }

  ngOnInit() {
    this.refresh();
  }

  private refresh() {
    this.config = this.dataService.config;
    this.types = this.dataService.getGameTypes();
  }

  async saveConfig() {
    await this.dataService.saveConfig();
  }

  async closePopover() {
    await this.popoverController.dismiss();
  }
}
