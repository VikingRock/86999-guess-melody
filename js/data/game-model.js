import {game, setLives, setTime, setCurrentQuestion, setCorrectQuestions} from './game-model-helpers';

class GameModel {
  constructor(state = game) {
    this._state = state;
    this._defaultState = state;
  }

  resetState() {
    Object.assign(this._state, this._defaultState);
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

  set correctQuestions(number) {
    this._state = setCorrectQuestions(this._state, number);
  }

  get correctQuestions() {
    return this._state.correctQuestions;
  }

  get maxTime() {
    return this._state.maxTime;
  }
}

export default new GameModel();
