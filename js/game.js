import {questions, result, statistics, TYPES} from './data/game-data';
import view from 'view';
import GameModel from 'data/game-model';

class GamePresenter {

  constructor(model = GameModel) {
    this.model = model;
    this.initialLives = GameModel.lives;
    this.timer = document.querySelector('.timer-wrapper');
    this.questionsCount = questions.length;
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
   * @param {number} questionsPassed
   * @param {number} initialLivesNum
   * @param {number} currentLives
   * @param {number} time
   * @return {object} stats
   */
  calcStats(stats, questionsPassed, initialLivesNum, currentLives, time) {
    let newStats = JSON.parse(JSON.stringify(stats));
    const currentResult = {
      time: time,
      answers: questionsPassed - initialLivesNum + currentLives - 1,
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
   * First invocation of controller,
   * it starts timer and adds event listeners
   */
  gameStart() {

    this.timer.classList.remove('invisible');
    window.stopFn = window.initializeCountdown(GameModel.maxTime);

    document.body.addEventListener('timer-end', this.goToResults, false);
    document.body.addEventListener('timer-tick', () => {
      GameModel.time++;
    }, false);

    this.switchToNext(0, questions);
  }

  /**
   * calling results and removing timer
   */
  goToResults() {
    result.stats = this.calcStats(statistics, GameModel.currentQuestion, this.initialLives, GameModel.lives, GameModel.time);
    window.stopFn();
    view(TYPES.RESULT, result);
    this.timer.classList.add('invisible');
  }

  /**
   * routes game to next question
   * or to results depending on user answers
   * and question count
   * @param {boolean} prevResult - result of the previous user answer
   */
  questionRouter(prevResult = true) {

    GameModel.currentQuestion++;

    if (prevResult === false) {
      if (GameModel.lives === 0) {
        this.goToResults();
        return;
      } else {
        GameModel.lives--;
      }
    }

    if (GameModel.currentQuestion === this.questionsCount) {
      this.goToResults();

    } else {
      this.switchToNext(GameModel.currentQuestion, questions);
    }
  }
}

export default new GamePresenter();
