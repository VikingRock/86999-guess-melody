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
