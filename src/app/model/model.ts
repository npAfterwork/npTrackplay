export type TID = string;
export type TDateTime = number;

export interface IGameConfig {
  sort: 'name' | 'date' | 'updated';
  dir: 'asc' | 'desc';
  filter: string;
  typeId: TID;
  showEndedGames: boolean;
}

export interface IConfig {
  games: IGameConfig;
  gamesForPlayer: IGameConfig;
  players: {
    sort: 'name' | 'date' | 'last';
    dir: 'asc' | 'desc';
    filter: string;
  };
}

export interface IBase {
  id: TID;
  name: string;
  created: TDateTime;
}

export interface IRound extends IBase {
  idx: number;
  values: { [playerID: string]: number };
}

export interface IPlayer extends IBase {
  playCount: number;
  winCount: number;
  looseCount: number;
  openCount: number;
  lastPlayed?: TDateTime;
}

export interface IGameType {
  id: TID;
  name: string;
  winHigh: boolean;
}

export interface IGame extends IBase {
  type: TID;
  players: TID[];
  rounds: TID[];
  ended: boolean;
  updated: TDateTime;
}
