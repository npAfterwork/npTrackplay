import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {IPlayer, TID} from '../../model/model';
import {DataService} from '../../services/data.service';

@Component({
             selector:    'app-player-select',
             templateUrl: './player-select.component.html',
             styleUrls:   ['./player-select.component.scss'],
           })
export class PlayerSelectComponent implements OnInit {

  players: IPlayer[];
  selected: { [key: string]: boolean } = {};

  @Input() selectedPlayers: TID[];

  constructor(
    private readonly dataService: DataService,
    private readonly popoverCtrl: PopoverController
  ) {}

  async ngOnInit() {
    await this.refresh();
  }

  private async refresh() {
    this.selected = {};
    for (const id of this.selectedPlayers) {
      this.selected[id] = true;
    }
    this.players = this.dataService.getPlayers().sort((a, b) => {
      if (this.selected[a.id] && this.selected[b.id]) {
        return this.selectedPlayers.indexOf(a.id) - this.selectedPlayers.indexOf(b.id);
      } else if (this.selected[a.id]) {
        return -1;
      } else if (this.selected[b.id]) {
        return 1;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }


  onCancelClicked() {
    this.popoverCtrl.dismiss(null, 'cancel');
  }

  onAcceptClicked() {
    this.selectedPlayers = [];
    for (const player of this.players) {
      if (this.selected[player.id]) {
        this.selectedPlayers.push(player.id);
      }
    }
    this.popoverCtrl.dismiss(this.selectedPlayers, 'accept');
  }
}
