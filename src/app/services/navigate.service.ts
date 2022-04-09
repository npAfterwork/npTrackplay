import {Injectable} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Subject} from 'rxjs';
import {ROUTES} from '../model/consts';
import {TID} from '../model/model';

@Injectable({
              providedIn: 'root'
            })
export class NavigateService {

  private refreshStreamSubject: Subject<void> = new Subject<void>();
  readonly refreshStream = this.refreshStreamSubject.asObservable();

  private cameFrom: 'player' | 'games';

  set lastPage(value: 'player' | 'games') {
    this.cameFrom = value;
  }

  get lastPage() {
    return this.cameFrom;
  }

  lastPageId: TID;

  constructor(
    private navController: NavController,
  ) { }

  async goToGame(id: TID) {
    await this.navController.navigateForward(ROUTES.GAME.ROUTE(id), {animated: true});
  }

  async goToPlayer(id: TID) {
    this.refreshStreamSubject.next();
    await this.navController.navigateForward(ROUTES.PLAYER.ROUTE(id), {animated: true});
  }

  async goToPlayers() {
    this.refreshStreamSubject.next();
    await this.navController.navigateRoot(ROUTES.PLAYERS.ROUTE, {animated: true});
  }

  async goBack() {
    if (this.lastPage === 'player') {
      return this.goToPlayer(this.lastPageId);
    } else {
      return this.goToGames();
    }
  }

  async goToGames() {
    this.refreshStreamSubject.next();
    await this.navController.navigateRoot(ROUTES.GAMES.ROUTE, {animated: true});
  }

  reportChanges() {
    this.refreshStreamSubject.next();
  }
}
