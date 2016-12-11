import view from 'view';
import {TYPES, welcome, result} from 'data/game-data';
import GamePresenter from './game-presenter';

export default class Application {

  static showWelcome() {
    view(TYPES.WELCOME, welcome);
  }

  static showGame(flag = false) {
    GamePresenter.gameStart(flag);
  }

  static showStats() {
    view(TYPES.RESULT, result);
  }

}
