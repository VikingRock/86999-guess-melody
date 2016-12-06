/**
 * game data structure
 * @type {object}
 */
export const game = {
  currentQuestion: 0,
  lives: 3,
  timer: 0,
  maxTime: 120,
  maxQuestionNum: 10
};

/**
 * sets lives and returns new game object
 * @param {object} gameObj
 * @param {number} lives
 * @return {object}
 */
export const setLives = (gameObj, lives) => {
  if (lives < 0 || lives > game.lives) {
    throw new RangeError(`Number of lives can't be negative or > 3`);
  }

  return Object.assign({}, gameObj, {
    lives: lives
  });
};

/**
 * sets time for current game
 * and returns new game object
 * @param {object} gameObj
 * @param {number} time
 * @return {object}
 */
export const setTime = (gameObj, time) => {
  if (time < 0) {
    throw new RangeError(`Time can't be negative`);
  }

  return Object.assign({}, gameObj, {
    timer: time
  });
};

/**
 * sets current game question
 * and returns new game object
 * @param {object} gameObj
 * @param {number} questionNum
 * @return {object}
 */
export const setCurrentQuestion = (gameObj, questionNum) => {
  if (questionNum < 0 || questionNum > game.maxQuestionNum) {
    throw new RangeError(`Questions can't be negative or > 9`);
  }

  return Object.assign({}, gameObj, {
    currentQuestion: questionNum
  });
};
