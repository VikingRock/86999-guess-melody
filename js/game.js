import {game} from './data/game-model-helpers';
import {questions, result, statistics, TYPES} from './data/game-data';
import {setLives, setTime, setCurrentQuestion} from './data/game-model-helpers';
import view from 'view';

const timer = document.querySelector('.timer-wrapper');
const questionsCount = questions.length;
let currentGame;
let initialLives;

/**
 * update game object
 * @param {object} current game
 */
const updateGame = (current) => {
  currentGame = current;
};

/**
 * Loads a new question from array and renders it
 * @param {number} questionNum
 * @param {array} questionsArr
 */
export const switchToNext = (questionNum, questionsArr) => {
  const currentQ = questionsArr[questionNum];
  view(currentQ.type, currentQ);
};

/**
 * formats time to minutes and seconds notation
 * @param {number} seconds
 * @return {object} minutes and seconds
 */
export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return {minutes, seconds};
};

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
export const calcStats = (stats, questionsPassed, initialLivesNum, currentLives, time) => {
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

  return {time: formatTime(time), correctAnswers: currentResult.answers, percents: successPercent};
};

/**
 * First invocation of controller,
 * it starts timer and adds event listeners
 * @param {obj} gameObj
 */
export const gameStart = () => {
  updateGame(game);
  initialLives = game.lives;

  timer.classList.remove('invisible');
  window.stopFn = window.initializeCountdown(currentGame.maxTime);

  document.body.addEventListener('timer-end', goToResults, false);
  document.body.addEventListener('timer-tick', () => {
    updateGame(setTime(currentGame, currentGame.timer + 1));
  }, false);

  switchToNext(0, questions);
};

/**
 * calling results and removing timer
 */
const goToResults = () => {
  result.stats = calcStats(statistics, currentGame.currentQuestion, initialLives, currentGame.lives, currentGame.timer);
  window.stopFn();
  view(TYPES.RESULT, result);
  timer.classList.add('invisible');
};

/**
 * routes game to next question
 * or to results depending on user answers
 * and question count
 * @param {boolean} prevResult - result of the previous user answer
 */
export const questionRouter = (prevResult = true) => {

  updateGame(setCurrentQuestion(currentGame, currentGame.currentQuestion + 1));

  if (prevResult === false) {
    if (currentGame.lives === 0) {
      goToResults();
      return;
    } else {
      updateGame(setLives(currentGame, currentGame.lives - 1));
    }
  }

  if (currentGame.currentQuestion === questionsCount) {
    goToResults();

  } else {
    switchToNext(currentGame.currentQuestion, questions);
  }
};
