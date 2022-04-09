import {Component} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {IPlayer} from '../../model/model';
import {Utils} from '../../model/utils';
import {DataService} from '../../services/data.service';
import {NavigateService} from '../../services/navigate.service';

@Component({
             selector:    'app-players-page',
             templateUrl: 'players.page.html',
             styleUrls:   ['players.page.scss']
           })
export class PlayersPage implements OnIonWillEnter {

  players: IPlayer[];
  all: IPlayer[];

  constructor(
    private readonly dataService: DataService,
    private readonly popoverController: PopoverController,
    private readonly navService: NavigateService,
  ) {
    // this is needed coz ionViewWillEnter bug: https://github.com/ionic-team/ionic/issues/16834
    this.navService.refreshStream.subscribe(() => {
      // console.log('refresh players from service');
      this.refresh();
    });
  }

  ionViewWillEnter() {
    this.refresh();
  }

  private refresh() {
    this.all = this.dataService.getPlayers(false, false);
    this.players = this.dataService.getPlayers();
  }

  async filterGames(event) {
    await Utils.presentGameSettingsPopover(this.popoverController, 'players', () => this.refresh(), event);
  }
}
