import {Component} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {IGame} from '../../model/model';
import {Utils} from '../../model/utils';
import {DataService} from '../../services/data.service';
import {NavigateService} from '../../services/navigate.service';


@Component({
             selector:    'app-tab-games',
             templateUrl: 'games.page.html',
             styleUrls:   ['games.page.scss']
           })
export class GamesPage implements OnIonWillEnter {

  games: IGame[];
  all: IGame[];

  constructor(
    private readonly dataService: DataService,
    private readonly navService: NavigateService,
    private readonly popoverController: PopoverController
  ) {
    // this is needed coz ionViewWillEnter bug: https://github.com/ionic-team/ionic/issues/16834
    this.navService.refreshStream.subscribe(() => {
      // console.log('refresh games from service');
      this.refresh();
    });
  }

  ionViewWillEnter() {
    this.navService.lastPage = 'games';
    this.refresh();
  }

  private refresh() {
    this.all = this.dataService.getGames(false, false);
    this.games = this.dataService.getGames();
  }

  async filterGames(event) {
    await Utils.presentGameSettingsPopover(this.popoverController, 'games', () => this.refresh(), event);
  }

}
