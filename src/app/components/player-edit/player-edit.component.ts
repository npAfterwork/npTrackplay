import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {IPlayer} from '../../model/model';
import {DataService} from '../../services/data.service';

@Component({
             selector:    'app-player-edit',
             templateUrl: './player-edit.component.html',
             styleUrls:   ['./player-edit.component.scss'],
           })
export class PlayerEditComponent implements OnInit {
  @Input() player: IPlayer;

  constructor(
    private readonly dataService: DataService,
    private readonly popoverController: PopoverController,
  ) { }

  ngOnInit() {}

  async savePlayer() {
    await this.dataService.savePlayer(this.player);
  }

  async closePopover() {
    await this.popoverController.dismiss();
  }

  async onKeyPressed($event: KeyboardEvent) {
    if ($event.code === 'Enter') {
      ($event.target as HTMLElement).blur();
      await this.closePopover();
    }
  }
}
