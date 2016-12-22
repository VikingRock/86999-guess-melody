import view from 'view';
import GameModel from 'data/game-model';
import timer from 'timer/timer';
import {getStats, setStats, formatTime} from 'stats-service';
import {result} from './data/game-data';
import Application from 'application';

class GamePresenter {

  constructor(model = GameModel) {
    this._model = model;
    this._timer = document.querySelector('.timer-wrapper');

    this._goToResults = this._goToResults.bind(this);
    this._tick = this._tick.bind(this);
  }

  /**
   * sets questions for the game
   * @param {array} questions
   */
  setQuestions(questions) {
    this._questions = questions;
    this._questionsCount = questions.length;
  }

  /**
   * First invocation of presenter,
   * it starts timer and adds event listeners,
   * switches to first question
   */
  gameStart() {
    this._model.resetState();
    result.stats.percent = false;

    this._stopFn = timer(this._model.maxTime, this._goToResults);
    document.body.addEventListener('timer-tick', this._tick, false);

    this._timer.classList.remove('invisible');
    this._switchToNext(0, this._questions);
  }

  /**
   * routes game to next question
   * or to results depending on user answers
   * and question count
   * @param {boolean} prevResult - result of the previous user answer
   */
  questionRouter(prevResult = true) {

    this._model.currentQuestion++;

    if (prevResult === false) {
      if (this._model.lives === 0) {
        this._goToResults();
        return;
      } else {
        this._model.lives--;
      }
    } else {
      this._model.correctQuestions++;
    }

    if (this._model.currentQuestion === this._questionsCount) {
      this._goToResults();

    } else {
      this._switchToNext(this._model.currentQuestion, this._questions);
    }
  }

  /**
   * Loads a new question from array and renders it
   * @param {number} questionNum
   * @param {array} questionsArr
   */
  _switchToNext(questionNum, questionsArr) {
    const currentQ = questionsArr[questionNum];
    view(currentQ.type, currentQ);
  }

  /**
   * increases game time by one second
   */
  _tick() {
    this._model.time++;
  }

  /**
   * downloads statistics, calls current stats calculations,
   * uploads stats to server,
   * calls results screen and removes timer
   */
  _goToResults() {
    const formattedTime = formatTime(this._model.time);
    getStats(this._model.correctQuestions, this._model.time, formattedTime)
        .then((resultStats) => {
          result.stats = resultStats;
          Application.showStats();
        })
        .catch((res) => {
          result.stats.time = formattedTime;
          Application.showStats();
        });
    setStats({time: this._model.time, answers: this._model.correctQuestions});
    this._stopFn();
    document.body.removeEventListener('timer-tick', this._tick);
  }
}

export default new GamePresenter();
