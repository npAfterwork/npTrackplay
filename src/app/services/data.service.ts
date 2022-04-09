import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {IConfig, IGame, IGameConfig, IGameType, IPlayer, IRound, TID} from '../model/model';

interface TPlayers {
  [key: string]: IPlayer;
}

interface TGames {
  [key: string]: IGame;
}

interface TGameTypes {
  [key: string]: IGameType;

  default: IGameType;
}

interface TRounds {
  [key: string]: IRound;
}

interface IDatabase {
  players: TPlayers;
  games: TGames;
  types: TGameTypes;
  rounds: TRounds;
  config: IConfig;
  hasLoaded: boolean;
}

const LS_KEY_GAMES = 'track.games';
const LS_KEY_PLAYERS = 'track.players';
const LS_KEY_ROUNDS = 'track.rounds';
const LS_KEY_TYPES = 'track.types';

const LS_KEY_CONFIG = 'track.config';

@Injectable({
              providedIn: 'root'
            })
export class DataService {

  private data: IDatabase = {
    games:     {}, players: {}, rounds: {}, types: {
      default: {
        id:      'default',
        name:    'Standard',
        winHigh: true,
      },
      rommee:  {
        id:      'rommee',
        name:    'Rommé',
        winHigh: false,
      },
      skat:    {
        id:      'skat',
        name:    'Skat',
        winHigh: true,
      }
    },
    config:    {
      games:          {dir: 'desc', filter: '', sort: 'updated', typeId: '', showEndedGames: true},
      gamesForPlayer: {dir: 'desc', filter: '', sort: 'updated', typeId: '', showEndedGames: false},
      players:        {dir: 'asc', filter: '', sort: 'name'},
    },
    hasLoaded: false
  };
  private backup: IDatabase;

  constructor(
    private readonly store: Storage
  ) { }


  // <editor-fold desc="*** Utils ***">
  static create_TID(): TID {
    let dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line:no-bitwise
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      // tslint:disable-next-line:no-bitwise
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  async init() {
    if (!this.data.hasLoaded) {
      await this.loadStore();
    }
    return this.data.hasLoaded;
  }

  async undoLastOperation() {
    return await this.restoreBackup();
  }

  get config() {
    return this.data.config;
  }

  // </editor-fold>

  // <editor-fold desc="*** Load Save ***">
  private async saveStore() {
    await this.saveGameTypes();
    await this.savePlayers();
    await this.saveRounds();
    await this.saveGames();
    await this.saveConfig();
  }

  private async loadStore() {
    await this.loadGameTypes();
    await this.loadPlayers();
    await this.loadRounds();
    await this.loadGames();
    await this.loadConfig();
    this.data.hasLoaded = true;
  }

  private backupStore() {
    this.backup = JSON.parse(JSON.stringify(this.data));
  }

  private restoreBackup() {
    this.data = this.backup;
    return this.saveStore();
  }

  private async loadPlayers() {
    const fromStore: TPlayers = await this.store.get(LS_KEY_PLAYERS);
    this.data.players = fromStore || this.data.players;
  }

  async savePlayers() {
    return await this.store.set(LS_KEY_PLAYERS, this.data.players);
  }

  savePlayer(player: IPlayer) {
    this.data.players[player.id] = player;
    return this.savePlayers();
  }

  private async loadGames() {
    const fromStore: TGames = await this.store.get(LS_KEY_GAMES);
    this.data.games = fromStore || this.data.games;
  }

  async saveGames() {
    return await this.store.set(LS_KEY_GAMES, this.data.games);
  }

  saveGame(game: IGame) {
    this.data.games[game.id] = game;
    return this.saveGames();
  }

  private async loadGameTypes() {
    const fromStore: TGameTypes = await this.store.get(LS_KEY_TYPES);
    this.data.types = fromStore || this.data.types;
    return this.data.types;
  }

  async saveGameTypes() {
    return await this.store.set(LS_KEY_TYPES, this.data.types);
  }

  saveGameType(type: IGameType) {
    this.data.types[type.id] = type;
    return this.saveGameTypes();
  }

  private async loadRounds() {
    const fromStore: TRounds = await this.store.get(LS_KEY_ROUNDS);
    this.data.rounds = fromStore || this.data.rounds;
  }

  async saveRounds() {
    return await this.store.set(LS_KEY_ROUNDS, this.data.rounds);
  }

  saveRound(round: IRound) {
    this.data.rounds[round.id] = round;
    return this.saveRounds();
  }

  private async loadConfig() {
    const fromStore: IConfig = await this.store.get(LS_KEY_CONFIG);
    this.data.config = fromStore || this.data.config;
  }

  async saveConfig() {
    return await this.store.set(LS_KEY_CONFIG, this.data.config);
  }

  // </editor-fold>

  // <editor-fold desc="*** Players ***">

  getPlayers(sorted = true, filtered = true): IPlayer[] {
    let players = Object.values(this.data.players);
    const config = this.data.config.players;
    players = sorted ? players.sort((a, b) => {
      if (config.dir === 'desc') {
        const c = a;
        a = b;
        b = c;
      }
      switch (config.sort) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'date':
          return a.created - b.created;
        case 'last':
          return a.lastPlayed - b.lastPlayed;
      }
      return 0;
    }) : players;
    players = filtered ? players.filter((player) => {
      return (config.filter !== '') ? !!player.name.match(`.*${config.filter}.*`) : true;
    }) : players;
    return players;
  }

  getPlayer(id: TID) {
    return this.data.players[id];
  }

  async createNewPlayer(name: string) {
    const newPlayer: IPlayer = {
      created:   Date.now(), id: DataService.create_TID(), name,
      playCount: 0, openCount: 0, looseCount: 0, winCount: 0
    };
    this.data.players[newPlayer.id] = newPlayer;
    await this.savePlayers();
    return newPlayer;
  }

  async deletePlayer(player: IPlayer) {
    this.backupStore();
    delete this.data.players[player.id];
    for (const gameID in this.data.games) {
      if (this.data.games.hasOwnProperty(gameID)) {
        const game = this.data.games[gameID];
        const position = game.players.indexOf(player.id);
        if (position >= 0) {
          game.players.splice(position, 1);
          if (game.players.length !== 0) { // still some players left
            for (const rID of game.rounds) {
              delete this.data.rounds[rID].values[player.id]; // delete value if still players are in the game
            }
          } else { // no players left
            if (game.ended) { // game ended => delete it
              await this.deleteGame(game, false);
            } else { // keep the game but delete the rounds
              for (const rID of game.rounds) {
                delete this.data.rounds[rID];
              }
              game.rounds = [];
            }
          }
        }
      }
    }
    return this.saveStore();
  }


  // </editor-fold>

  // <editor-fold desc="*** Games ***">

  private configureGames(sorted = true, filtered = true, config: IGameConfig) {
    let games = Object.values(this.data.games);
    games = sorted ? games.sort((a, b) => {
      if (config.dir === 'desc') {
        const c = a;
        a = b;
        b = c;
      }
      switch (config.sort) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'date':
          return a.created - b.created;
        case 'updated':
          return a.updated - b.updated;
      }
      return 0;
    }) : games;
    games.sort((a, b) => (a.ended ? 1 : 0) - (b.ended ? 1 : 0));
    games = filtered ? games.filter((game) => {
      let result = (config.filter !== '') ? !!game.name.match(`.*${config.filter}.*`) : true;
      result = result ? ((config.typeId === '') || (game.type === config.typeId)) : result;
      return result ? (config.showEndedGames === true || !game.ended) : result;
    }) : games;
    return games;
  }

  getGames(sorted = true, filtered = true): IGame[] {
    return this.configureGames(sorted, filtered, this.config.games);
  }

  getGame(id: TID) {
    return this.data.games[id];
  }

  getGamesByPlayer(player: IPlayer, sorted = true, filtered = true): IGame[] {
    const games = this.configureGames(sorted, filtered, this.config.gamesForPlayer);
    return games.filter(game => game.players.indexOf(player.id) >= 0);
  }

  async createNewGame(name: string, players: TID[] = []) {
    const newGame: IGame = {
      name, created:   Date.now(), updated: Date.now(), id: DataService.create_TID(),
      players, rounds: [], type: 'default', ended: false
    };
    this.data.games[newGame.id] = newGame;
    await this.saveGames();
    return newGame;
  }

  async deleteGame(game: IGame, doBackup = true) {
    if (doBackup) {
      this.backupStore();
    }
    delete this.data.games[game.id];
    if (!game.ended) {
      game.players.forEach(pId => {
        this.getPlayer(pId).openCount--;
      });
    }
    game.rounds.forEach(round => {
      delete this.data.rounds[round];
    });
    if (doBackup) {
      await this.saveStore();
    }
  }

  // </editor-fold>

  // <editor-fold desc="*** Game Types ***">

  getGameTypes(): IGameType[] {
    return Object.values(this.data.types).sort((a, b) => {
      if (a.id === 'default') {
        return -1;
      }
      if (b.id === 'default') {
        return 1;
      }
      return a.name.localeCompare(b.name);
    });
  }

  getGameType(tid: TID) {
    return this.data.types[tid];
  }

  async createNewGameType(name: string, winHigh: boolean) {
    const newType: IGameType = {
      id: DataService.create_TID(), name, winHigh
    };
    this.data.types[newType.id] = newType;
    await this.saveGameTypes();
    return newType;
  }

  async deleteGameType(type: IGameType) {
    this.backupStore();
    delete this.data.types[type.id];
    for (const gameID in this.data.games) {
      if (this.data.games.hasOwnProperty(gameID)) {
        const game = this.data.games[gameID];
        if (game.type === type.id) {
          game.type = 'default';
        }
      }
    }
    if (this.data.config.games.typeId === type.id) {
      this.data.config.games.typeId = '';
    }
    return this.saveStore();
  }

  // </editor-fold>

  // <editor-fold desc="*** Game Rounds ***">

  getRound(pid: TID) {
    return this.data.rounds[pid];
  }

  /**
   * This will not be added to the store save on value changed
   */
  createNewRound(name: string, idx: number, values: { [playerID: string]: number }) {
    const newRound: IRound = {
      id: DataService.create_TID(), name, created: Date.now(), values, idx
    };
    return newRound;
  }

  // </editor-fold>


}
