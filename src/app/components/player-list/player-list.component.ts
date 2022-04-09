import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonList, Platform, PopoverController, ToastController} from '@ionic/angular';
import {IPlayer} from '../../model/model';
import {Utils} from '../../model/utils';
import {DataService} from '../../services/data.service';
import {NavigateService} from '../../services/navigate.service';

@Component({
             selector:    'app-player-list',
             templateUrl: './player-list.component.html',
             styleUrls:   ['./player-list.component.scss'],
           })
export class PlayerListComponent implements OnInit {

  @ViewChild('itemList', {static: false}) itemList: IonList;
  @Input() players: IPlayer[];
  @Input() header: string;
  private editWasReached = false;

  constructor(
    private readonly navService: NavigateService,
    private readonly dataService: DataService,
    private readonly platform: Platform,
    private readonly toastController: ToastController,
    private readonly popoverController: PopoverController
  ) { }

  ngOnInit() {}

  private refresh() {
    this.navService.reportChanges();
  }

  async deleteOnDrag($event: CustomEvent, player: IPlayer) {
    const eightyPercent = (this.platform.width() / 100.0 * 80.0);
    if (($event.detail.amount * -1) >= eightyPercent) {
      await this.deletePlayer(player);
    } else if (($event.detail.amount) >= eightyPercent) {
      if (!this.editWasReached) {
        this.onEditPlayerClicked(player);
      }
      this.editWasReached = true;
    } else {
      this.editWasReached = false;
    }
  }

  async deletePlayer(player: IPlayer) {
    this.players.splice(this.players.indexOf(player), 1);
    await this.dataService.deletePlayer(player);
    await this.presentToastWithOptions(player);
    this.refresh();
  }

  async presentToastWithOptions(undo: IPlayer) {
    await Utils.presentUndoToast(this.toastController, undo.name, () => {
      this.dataService.undoLastOperation().then(() => {
        if (this.players.indexOf(undo) < 0) {this.players.push(undo); }
        this.refresh();
        return true;
      });
    });
  }

  async onEditPlayerClicked(player: IPlayer) {
    // refresh ?
    await Utils.presentPlayerPopover(this.popoverController, player, () => {
      this.itemList.closeSlidingItems().then(() => true);
      this.refresh();
    });
  }

  async onAddPlayer() {
    const newPlayer = await this.dataService.createNewPlayer('');
    this.players.push(newPlayer);
    await Utils.presentPlayerPopover(this.popoverController, newPlayer);
    this.refresh();
  }

  async onGoToPlayerClicked(player: IPlayer) {
    await this.navService.goToPlayer(player.id);
  }
}
