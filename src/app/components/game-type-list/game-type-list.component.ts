import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonList, Platform, PopoverController, ToastController} from '@ionic/angular';
import {IGameType} from '../../model/model';
import {Utils} from '../../model/utils';
import {DataService} from '../../services/data.service';
import {NavigateService} from '../../services/navigate.service';

@Component({
             selector:    'app-game-type-list',
             templateUrl: './game-type-list.component.html',
             styleUrls:   ['./game-type-list.component.scss'],
           })
export class GameTypeListComponent implements OnInit {
  @ViewChild('itemList', {static: false}) itemList: IonList;
  @Input() types: IGameType[];
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

  async deleteGameType(gametype: IGameType) {
    this.types.splice(this.types.indexOf(gametype), 1);
    await this.dataService.deleteGameType(gametype);
    await this.presentToastWithOptions(gametype);
  }

  async deleteOnDrag($event: CustomEvent, type: IGameType) {
    const eightyPercent = (this.platform.width() / 100.0 * 80.0);
    if (($event.detail.amount * -1) >= eightyPercent) {
      await this.deleteGameType(type);
    } else if (($event.detail.amount) >= eightyPercent) {
      if (!this.editWasReached) {
        this.onEditGameTypeClicked(type);
      }
      this.editWasReached = true;
    } else {
      this.editWasReached = false;
    }
  }

  async presentToastWithOptions(undo: IGameType) {
    await Utils.presentUndoToast(this.toastController, undo.name, () => {
      this.dataService.undoLastOperation().then(() => {
        if (this.types.indexOf(undo) < 0) {this.types.push(undo); }
        return true;
      });
    });
  }

  async onEditGameTypeClicked(type: IGameType) {
    await Utils.presentGameTypePopover(this.popoverController, type, () => {
      this.itemList.closeSlidingItems().then(() => true);
    });
  }

  async onAddGameType() {
    const newType = await this.dataService.createNewGameType('', true);
    this.types.push(newType);
    await Utils.presentGameTypePopover(this.popoverController, newType);
  }
}

