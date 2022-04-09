import {AfterContentChecked, AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IGame, IGameType, IPlayer, IRound} from '../../model/model';
import {DataService} from '../../services/data.service';
import {NavigateService} from '../../services/navigate.service';

/**
 * TODO: swap colum and rows...
 */
@Component({
             selector:    'app-game',
             templateUrl: './game.page.html',
             styleUrls:   ['./game.page.scss'],
           })
export class GamePage implements OnInit, AfterContentChecked, AfterViewChecked {

  @ViewChild('header', {static: false}) header: ElementRef;
  @ViewChild('footer', {static: false}) footer: ElementRef;
  @ViewChild('data', {static: false}) data: ElementRef;

  players: IPlayer[];
  rounds: IRound[];
  scores: number[] = [];
  game: IGame;

  private gameType: IGameType;
  private newRound: IRound;
  private shouldScroll = true;
  private isSecondRun = false;

  constructor(
    private readonly dataService: DataService,
    private readonly navService: NavigateService,
    private readonly route: ActivatedRoute,
  ) { }


  private async createNewRound() {
    if (this.newRound) {
      this.game.rounds.push(this.newRound.id);
      await this.dataService.saveRound(this.newRound);
      await this.dataService.saveGame(this.game);
    }
    const idx = this.rounds.length;
    const values = {};
    for (const pid of this.game.players) {
      values[pid] = 0;
    }
    this.newRound = this.dataService.createNewRound('round ' + idx, idx, values);
    this.rounds.push(this.newRound);
  }

  ngAfterContentChecked(): void {
    this.scrollToBottom();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.game = this.dataService.getGame(id);
    this.gameType = this.dataService.getGameType(this.game.type);
    this.players = [];
    this.rounds = [];
    for (const pid of this.game.players) {
      const player = this.dataService.getPlayer(pid);
      this.players.push(player);
    }
    for (const pid of this.game.rounds) {
      const round = this.dataService.getRound(pid);
      this.rounds.push(round);
    }
    await this.createNewRound();
    this.calculateScores();
  }


  async onValueChanged(event: any, round: IRound, player: IPlayer) {
    const value = Number.parseInt(event.target.value, 0) || 0;
    round.values[player.id] = value;
    if ((round === this.newRound) && (value !== 0)) {
      await this.createNewRound();
    }
    await this.dataService.saveRounds();
    const now = Date.now();
    for (const pid of this.game.players) {
      const other = this.dataService.getPlayer(pid);
      other.lastPlayed = now;
      await this.dataService.savePlayer(other);
    }
    this.game.updated = now;
    await this.dataService.saveGame(this.game);
    this.calculateScores();
  }

  calculateScores() {
    for (const pid of this.game.players) {
      let result = 0;
      for (const round of this.rounds) {
        result = result + (round.values[pid] || 0);
      }
      this.scores[pid] = result;
    }
  }

  onKeyPressed($event: KeyboardEvent) {
    if ($event.code === 'Enter') {
      ($event.target as HTMLElement).blur();
    }
  }

  onScroll($event: Event) {
    const scrollLeft = ($event.target as HTMLElement).scrollLeft;
    this.data.nativeElement.scrollLeft = scrollLeft;
    this.header.nativeElement.scrollLeft = scrollLeft;
    this.footer.nativeElement.scrollLeft = scrollLeft;
  }

  getValue(round: IRound, player: IPlayer): number {
    return round.values[player.id];
  }

  private scrollToBottom() {
    if (this.data && this.shouldScroll) {
      const elm = this.data.nativeElement as HTMLElement;
      const isOnBottom = (elm.scrollHeight - elm.scrollTop - elm.clientHeight) === 0;
      if (!isOnBottom) {
        elm.scrollTop = elm.scrollHeight - elm.clientHeight;
        if (this.isSecondRun) {
          this.shouldScroll = false;
          this.isSecondRun = false;
        }
        this.isSecondRun = true;
      }
    }
  }

  async endGame() {
    this.game.ended = !this.game.ended;
    this.getResult().forEach((player, idx) => {
      player.openCount += (this.game.ended ? -1 : 1);
      if (idx === 0) {
        player.winCount += (this.game.ended ? 1 : -1);
      } else {
        player.looseCount += (this.game.ended ? 1 : -1);
      }
    });
    await this.dataService.savePlayers();
    await this.dataService.saveGame(this.game);
  }

  getResult(): IPlayer[] {
    if (this.players && this.gameType) {
      const clone = [];
      clone.push(...this.players);
      if (this.gameType.winHigh) {
        return clone.sort((a, b) => this.scores[b.id] - this.scores[a.id]);
      } else {
        return clone.sort((a, b) => this.scores[a.id] - this.scores[b.id]);
      }
    } else {
      return [];
    }
  }

  getWinner() {
    return this.getResult().find(() => true);
  }

  async goBack() {
    await this.navService.goBack();
  }
}
