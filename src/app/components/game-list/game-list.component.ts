import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonList, Platform, PopoverController, ToastController} from '@ionic/angular';
import {TEXTS} from '../../model/consts';
import {IGame, IPlayer, TID} from '../../model/model';
import {Utils} from '../../model/utils';
import {DataService} from '../../services/data.service';
import {NavigateService} from '../../services/navigate.service';

@Component({
             selector:    'app-game-list',
             templateUrl: './game-list.component.html',
             styleUrls:   ['./game-list.component.scss'],
           })
export class GameListComponent implements OnInit {

  stats = {
    openAll: 0,
    openFiltered: 0,
    endedAll: 0,
    endedFiltered: 0
  };

  private iall: IGame[];

  @Input() set all(value: IGame[]) {
    this.iall = value;
    this.stats.endedAll = this.stats.openAll = 0;
    if (value) {
      value.forEach(game => game.ended ? this.stats.endedAll++ : this.stats.openAll++);
    }
  }

  get all(): IGame[] {
    return this.iall;
  }

  @ViewChild('itemList', {static: false}) itemList: IonList;

  @Input() hasAddButton = true;
  @Input() player: IPlayer;

  private igames: IGame[];

  @Input() set games(value: IGame[]) {
    this.igames = value;
    this.stats.endedFiltered = this.stats.openFiltered = 0;
    if (value) {
      value.forEach(game => game.ended ? this.stats.endedFiltered++ : this.stats.openFiltered++);
    }
  }

  get games(): IGame[] {
    return this.igames;
  }

  private lastWasEnded = false;
  private editWasReached = false;

  constructor(
    private readonly navService: NavigateService,
    private readonly dataService: DataService,
    private readonly platform: Platform,
    private readonly toastController: ToastController,
    private readonly popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  refresh() {
    // console.log('game list refresh -> send to service');
    this.navService.reportChanges();
  }

  async onEditGameClicked(game: IGame) {
    await Utils.presentGamePopover(this.popoverController, game, () => {
      this.refresh();
      this.itemList.closeSlidingItems().then(() => true);
    });
  }

  async deleteOnDrag($event: CustomEvent, game: IGame) {
    const eightyPercent = (this.platform.width() / 100.0 * 80.0);
    if (($event.detail.amount * -1) >= eightyPercent) {
      await this.deleteGame(game);
    } else if (($event.detail.amount) >= eightyPercent) {
      if (!this.editWasReached) {
        this.onEditGameClicked(game);
      }
      this.editWasReached = true;
    } else {
      this.editWasReached = false;
    }
  }

  async deleteGame(game: IGame) {
    const idx = this.igames.indexOf(game);
    if (idx >= 0) {
      this.igames.splice(idx, 1);
      await this.dataService.deleteGame(game);
      await this.presentToastWithOptions(game);
      this.refresh();
    }
  }

  async presentToastWithOptions(undo: IGame) {
    await Utils.presentUndoToast(this.toastController, undo.name, () => {
      this.dataService.undoLastOperation().then(async () => {
        if (this.igames.indexOf(undo) < 0) {
          await this.refresh();
        }
      });
      return true;
    });
  }

  async onAddGame() {
    const newGame = await this.dataService.createNewGame(TEXTS.NEW_GAME, []);
    await this.refresh();
    await Utils.presentGamePopover(this.popoverController, newGame);
  }

  async onGoToGameClicked(game: IGame) {
    await this.navService.goToGame(game.id);
  }

  getTypeName(tID: TID) {
    const gameType = this.dataService.getGameType(tID);
    return gameType ? gameType.name : 'Unbekannt';
  }

  addHeader(game: IGame) {
    if (this.igames.indexOf(game) === 0) { // set to false on start
      this.lastWasEnded = false;
    }
    if (!this.lastWasEnded && game.ended) {
      this.lastWasEnded = true;
      return true;
    } else {
      return false;
    }
  }
}
