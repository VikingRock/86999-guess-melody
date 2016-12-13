import view from 'view';
import {TYPES, welcome, result} from 'data/game-data';
import GamePresenter from './game-presenter';

export default class Application {

  static showWelcome() {
    view(TYPES.WELCOME, welcome);
  }

  static showGame() {
    GamePresenter.gameStart();
  }

  static showStats() {
    view(TYPES.RESULT, result);
  }

}
