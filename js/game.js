import * as dom from './dom-helpers';
import {game, questions, result} from './data/game-data';
import {setLives, switchToNext} from './data/game-helpers';
import createResultElement from './template-result';

let currentQuestionNum = 0;
const timer = document.querySelector('.timer-wrapper');
const questionsCount = questions.length;
let currentGame = game;

const initGame = (current = game) => {
  currentGame = current;
};

/**
 * calling results and removing timer
 */
const goToResults = () => {
  window.stopFn();
  dom.renderElement(createResultElement(result));
  timer.classList.add('invisible');
};


export default (prevResult = true) => {

  if (prevResult === false) {
    if (currentGame.lives === 0) {
      goToResults();
      return;
    } else {
      initGame(setLives(currentGame, currentGame.lives - 1));
    }
  }

  if (currentQuestionNum === 0) {
    timer.classList.remove('invisible');
    window.stopFn = window.initializeCountdown(currentGame.timer);
    /**
     * when timer has ended - switch to results
     */
    document.body.addEventListener('timer-end', goToResults, false);
  }

  if (currentQuestionNum === questionsCount) {
    goToResults();

  } else {

    switchToNext(currentQuestionNum++, questions);
  }
};
