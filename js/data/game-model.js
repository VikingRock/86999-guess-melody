import {game, setLives, setTime, setCurrentQuestion} from './game-model-helpers';

class GameModel {
  constructor(state = game) {
    this._state = state;
    this._defaultState = state;
  }

  resetState() {
    this._state = this._defaultState;
  }

  set time(time) {
    this._state = setTime(this._state, time);
  }

  get time() {
    return this._state.timer;
  }

  set lives(lives) {
    this._state = setLives(this._state, lives);
  }

  get lives() {
    return this._state.lives;
  }

  set currentQuestion(questionNum) {
    this._state = setCurrentQuestion(this._state, questionNum);
  }

  get currentQuestion() {
    return this._state.currentQuestion;
  }

  get maxTime() {
    return this._state.maxTime;
  }
}

export default new GameModel();
