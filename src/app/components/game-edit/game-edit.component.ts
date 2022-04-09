import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {IGame, IGameType, IPlayer} from '../../model/model';
import {DataService} from '../../services/data.service';
import {NavigateService} from '../../services/navigate.service';
import {PlayerSelectComponent} from '../player-select/player-select.component';

@Component({
             selector:    'app-game-edit',
             templateUrl: './game-edit.component.html',
             styleUrls:   ['./game-edit.component.scss'],
           })
export class GameEditComponent implements OnInit {

  @Input() game: IGame;

  players: IPlayer[];
  gameTypes: IGameType[];


  constructor(
    private readonly dataService: DataService,
    private readonly navService: NavigateService,
    private readonly popoverCtrl: PopoverController
  ) {
    this.gameTypes = this.dataService.getGameTypes();
  }

  async ngOnInit() {
    await this.updatePlayers();
  }

  async onAddPlayerClicked() {
    await this.presentPopover(null);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
                                                    component:       PlayerSelectComponent,
                                                    componentProps:  {
                                                      selectedPlayers: this.game.players,
                                                    },
                                                    event:           ev,
                                                    translucent:     true,
                                                    cssClass:        'action-sheet-popover',
                                                    animated:        true,
                                                    showBackdrop:    true,
                                                    backdropDismiss: true,
                                                  });
    await popover.present();
    const {data} = await popover.onWillDismiss();
    if (data) {
      this.game.players = data;
      await this.updatePlayers();
    }
  }

  private async updatePlayers() {
    const hasPlayers = !!this.players;
    if (hasPlayers) {
      this.players.forEach(player => {
        player.playCount--;
        player.openCount--;
      });
      await this.dataService.savePlayers();
    }
    this.players = [];
    for (const pid of this.game.players) {
      const player = this.dataService.getPlayer(pid);
      if (hasPlayers) { // else initial set up
        player.playCount++;
        player.openCount++;
      }
      this.players.push(player);
    }
    await this.dataService.savePlayers();
    await this.saveGame();
  }

  async doReorder(ev: CustomEvent) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    // console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    const draggedItem = this.players.splice(ev.detail.from, 1)[0];
    this.players.splice(ev.detail.to, 0, draggedItem);
    this.game.players = this.players.map(player => player.id);
    await this.saveGame();
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  async onPlayClicked() {
    await this.navService.goToGame(this.game.id);
    await this.popoverCtrl.dismiss();
  }

  async saveGame() {
    await this.dataService.saveGame(this.game);
  }

  async onCancelClicked() {
    await this.popoverCtrl.dismiss();
  }
}
