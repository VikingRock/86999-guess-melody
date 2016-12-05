import * as dom from './dom-helpers';
import {questions, result, statistics} from './data/game-data';
import {setLives, switchToNext, calcStats, setTime} from './data/game-helpers';
import createResultElement from './template-result';

let currentQuestionNum = 0;
const timer = document.querySelector('.timer-wrapper');
const questionsCount = questions.length;
let currentGame;
let initialLives;

/**
 * initialize a game with updated lives
 * @param {object} current game
 */
const initGame = (current) => {
  currentGame = current;
};

/**
 * First invocation of controller,
 * it starts timer and adds event listeners
 * @param {obj} gameObj
 */
export const gameStart = (gameObj) => {
  currentGame = gameObj;
  initialLives = gameObj.lives;

  timer.classList.remove('invisible');
  window.stopFn = window.initializeCountdown(currentGame.maxTime);

  document.body.addEventListener('timer-end', goToResults, false);
  document.body.addEventListener('timer-tick', () => {
    currentGame = setTime(currentGame, currentGame.timer + 1);
  }, false);

  switchToNext(currentQuestionNum++, questions);
};

/**
 * calling results and removing timer
 */
const goToResults = () => {
  result.stats = calcStats(statistics, currentQuestionNum, initialLives, currentGame.lives, currentGame.timer);
  window.stopFn();
  dom.renderElement(createResultElement(result));
  timer.classList.add('invisible');
};


export const questionRouter = (prevResult = true) => {

  if (prevResult === false) {
    if (currentGame.lives === 0) {
      goToResults();
      return;
    } else {
      initGame(setLives(currentGame, currentGame.lives - 1));
    }
  }

  if (currentQuestionNum === questionsCount) {
    goToResults();

  } else {
    switchToNext(currentQuestionNum++, questions);
  }
};
