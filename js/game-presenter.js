import {questions, result, statistics} from './data/game-data';
import view from 'view';
import GameModel from 'data/game-model';
import Application from 'application';

class GamePresenter {

  constructor(model = GameModel) {
    this.model = model;
    this.timer = document.querySelector('.timer-wrapper');
    this.questionsCount = questions.length;

    this.goToResults = this.goToResults.bind(this);
    this.tick = this.tick.bind(this);
  }

  /**
   * Loads a new question from array and renders it
   * @param {number} questionNum
   * @param {array} questionsArr
   */
  switchToNext(questionNum, questionsArr) {
    const currentQ = questionsArr[questionNum];
    view(currentQ.type, currentQ);
  }

  /**
   * formats time to minutes and seconds notation
   * @param {number} seconds
   * @return {object} minutes and seconds
   */
  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return {minutes, seconds};
  }

  /**
   * calculates statistics based on user progress
   * and compares user results with an array of previous results
   * @param {array} stats
   * @param {number} points
   * @param {number} time
   * @return {object} stats
   */
  calcStats(stats, points, time) {
    let newStats = JSON.parse(JSON.stringify(stats));
    const currentResult = {
      time: time,
      answers: points,
      recent: true
    };
    newStats.push(currentResult);
    const totalResultsNum = newStats.length;
    let currentGamePlace = totalResultsNum;

    newStats.sort((a, b) => {
      if (a.answers === b.answers) {
        return a.time - b.time;
      }
      return b.answers - a.answers;
    });

    newStats.find((el, idx) => {
      if (el.recent === true) {
        currentGamePlace = idx + 1;
        return true;
      }
      return false;
    });

    const successPercent = Math.round((totalResultsNum - currentGamePlace) / totalResultsNum * 100);

    return {time: this.formatTime(time), correctAnswers: currentResult.answers, percents: successPercent};
  }

  /**
   * increases time by one second
   */
  tick() {
    this.model.time++;
  }

  /**
   * First invocation of presenter,
   * it starts timer and adds event listeners
   */
  gameStart() {
    this.model.resetState();

    document.body.addEventListener('timer-end', this.goToResults, false);
    document.body.addEventListener('timer-tick', this.tick, false);

    this.timer.classList.remove('invisible');
    window.stopFn = window.initializeCountdown(this.model.maxTime);
    this.switchToNext(0, questions);
  }

  /**
   * calling results and removing timer
   */
  goToResults() {
    result.stats = this.calcStats(statistics, this.model.correctQuestions, this.model.time);
    window.stopFn();
    document.body.removeEventListener('timer-end', this.goToResults);
    document.body.removeEventListener('timer-tick', this.tick);
    Application.showStats();
  }

  /**
   * routes game to next question
   * or to results depending on user answers
   * and question count
   * @param {boolean} prevResult - result of the previous user answer
   */
  questionRouter(prevResult = true) {

    this.model.currentQuestion++;

    if (prevResult === false) {
      if (this.model.lives === 0) {
        this.goToResults();
        return;
      } else {
        this.model.lives--;
      }
    } else {
      this.model.correctQuestions++;
    }

    if (this.model.currentQuestion === this.questionsCount) {
      this.goToResults();

    } else {
      this.switchToNext(this.model.currentQuestion, questions);
    }
  }
}

export default new GamePresenter();
