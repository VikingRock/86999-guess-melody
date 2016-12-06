const maxLives = 3;
const maxQuestionNum = 9;

export const setLives = (gameObj, lives) => {
  if (lives < 0 || lives > maxLives) {
    throw new RangeError(`Number of lives can't be negative or > 3`);
  }

  return Object.assign({}, gameObj, {
    lives: lives
  });
};

export const setTime = (gameObj, time) => {
  if (time < 0) {
    throw new RangeError(`Time can't be negative`);
  }

  return Object.assign({}, gameObj, {
    timer: time
  });
};

export const setCurrentQuestion = (gameObj, questionNum) => {
  if (questionNum < 0 || questionNum > maxQuestionNum) {
    throw new RangeError(`Questions can't be negative or > 9`);
  }

  return Object.assign({}, gameObj, {
    currentQuestion: questionNum
  });
};
