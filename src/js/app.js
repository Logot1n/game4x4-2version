import GameController from './GameController';
import GameEvents from './GameEvents';

const gameEvents = new GameEvents();
const gameCtrl = new GameController(gameEvents);
gameCtrl.init();
