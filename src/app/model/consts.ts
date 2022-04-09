export const FRAGMENTS = {
  ROOT:      '/',
  GAME:      'game',
  GAMES:     'games',
  GAME_EDIT: 'game-edit',
  PLAYER:    'player',
  PLAYERS:   'players',
  HOME:      'home'
};
export const ROUTES = {
  GAMES:   {
    URL:   '/home/games/',
    ROUTE: [FRAGMENTS.ROOT, FRAGMENTS.HOME, FRAGMENTS.GAMES]
  },
  GAME:    {
    URL: 'game/:id',
    ROUTE(id) { return [FRAGMENTS.ROOT, FRAGMENTS.GAME, id]; }
  },
  PLAYER:  {
    URL: 'player/:id',
    ROUTE(id) { return [FRAGMENTS.ROOT, FRAGMENTS.PLAYER, id]; }
  },
  PLAYERS: {
    URL:   '/home/players/',
    ROUTE: [FRAGMENTS.ROOT, FRAGMENTS.HOME, FRAGMENTS.PLAYERS]
  },
  HOME:    {
    ROUTE: [FRAGMENTS.ROOT, FRAGMENTS.HOME]
  }
};

export const TEXTS = {
  NEW_GAME: 'Neues Spiel'
};
