import * as dom from '../dom-helpers';

export const setLives = (gameObj, lives) => {
  if (lives < 0 || lives > gameObj.lives) {
    throw new RangeError(`Number of lives can't be negative or > 3`);
  }

  return Object.assign({}, gameObj, {
    lives: lives
  });
};

export const switchToNext = (questionNum, questionsArr) => {
  if (questionNum < 0 || questionNum >= questionsArr.length) {
    throw new RangeError(`Number of questions can't be negative or > 10`);
  }
  const currentQ = {};
  Object.assign(currentQ, questionsArr[questionNum]);
  dom.renderElement(currentQ.type.renderer(currentQ));
};

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return {minutes, seconds};
};

export const calcStats = (stats, questionsPassed, initialLives, currentLives, time) => {
  let newStats = JSON.parse(JSON.stringify(stats));
  const currentResult = {
    time: time,
    answers: questionsPassed - initialLives + currentLives,
    recent: true
  };
  newStats.push(currentResult);
  const totalResultsNum = newStats.length;
  let currentGamePlace = totalResultsNum;

  newStats.sort((a,b) => {
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

  return {time: formatTime(time), correctAnswers: currentResult.answers - 1, percents: successPercent};
};
