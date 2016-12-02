import * as dom from './dom-helpers';
import {game, questions, result} from './data/game-data';
import {setLives} from './data/game-helpers';
import createResultElement from './template-result';

let currentQuestionNum = 0;
const timer = document.querySelector('.timer-wrapper');
const questionsCount = questions.length;


export default (prevResult) => {

  if (prevResult === false) {
    setLives(game, game.lives - 1);
  }

  timer.classList.remove('invisible');

  if (currentQuestionNum === 0) {
    window.stopFn = window.initializeCountdown(game.timer);
  }

  /**
   * calling results and removing timer
   */
  const goToResults = () => {
    window.stopFn();
    dom.renderElement(createResultElement(result));
    timer.classList.add('invisible');
  };

  /**
   * when timer has ended - switch to results
   */
  document.body.addEventListener('timer-end', goToResults, false);

  if (currentQuestionNum === questionsCount) {
    goToResults();

  } else {

    const currentQ = questions[currentQuestionNum++];
    dom.renderElement(currentQ.type.renderer(currentQ));
  }
};
