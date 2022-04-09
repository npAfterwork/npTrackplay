import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PopoverController} from '@ionic/angular';
import {TEXTS} from '../../model/consts';
import {IGame, IPlayer} from '../../model/model';
import {Utils} from '../../model/utils';
import {DataService} from '../../services/data.service';
import {NavigateService} from '../../services/navigate.service';

@Component({
             selector:    'app-player',
             templateUrl: './player.page.html',
             styleUrls:   ['./player.page.scss'],
           })
export class PlayerPage implements OnIonWillEnter {


  player: IPlayer;
  games: IGame[];
  all: IGame[];

  constructor(
    private readonly dataService: DataService,
    private readonly navService: NavigateService,
    private readonly route: ActivatedRoute,
    private readonly popoverController: PopoverController
  ) {
    this.navService.refreshStream.subscribe(() => this.refresh());
    this.refresh();
  }

  ionViewWillEnter() {
    this.navService.lastPage = 'player';
    this.refresh();
  }

  private refresh() {
    this.player = this.dataService.getPlayer(this.route.snapshot.paramMap.get('id'));
    if (this.player) {
      this.navService.lastPageId = this.player.id;
      this.all = this.dataService.getGamesByPlayer(this.player, false, false);
      this.games = this.dataService.getGamesByPlayer(this.player);
    } else {
      this.navService.lastPageId = null;
      this.all = [];
      this.games = [];
    }
  }

  async savePlayer() {
    await this.dataService.savePlayers();
  }

  async onAddGameClicked() {
    this.player.openCount++;
    this.player.playCount++;
    await this.dataService.savePlayer(this.player);
    const newGame = await this.dataService.createNewGame(TEXTS.NEW_GAME, [this.player.id]);
    await Utils.presentGamePopover(this.popoverController, newGame, () => this.refresh());
  }


  async filterGames(event) {
    await Utils.presentGameSettingsPopover(this.popoverController, 'gamesForPlayer', () => this.refresh(), event);
  }

  async goBackToPlayersPage() {
    await this.navService.goToPlayers();
  }
}
