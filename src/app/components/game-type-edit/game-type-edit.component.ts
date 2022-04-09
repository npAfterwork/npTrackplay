import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {IGameType} from '../../model/model';
import {DataService} from '../../services/data.service';

@Component({
             selector:    'app-game-type-edit',
             templateUrl: './game-type-edit.component.html',
             styleUrls:   ['./game-type-edit.component.scss'],
           })
export class GameTypeEditComponent implements OnInit {

  @Input() gameType: IGameType;

  constructor(
    private readonly dataService: DataService,
    private readonly popoverController: PopoverController,
  ) { }

  ngOnInit() {}

  async saveType() {
    await this.dataService.saveGameType(this.gameType);
  }

  async closePopover() {
    await this.popoverController.dismiss();
  }
}
