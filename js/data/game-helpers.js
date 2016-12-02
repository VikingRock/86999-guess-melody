export const setLives = (gameObj, lives) => {
  if (lives < 0 || lives > gameObj.lives) {
    throw new RangeError(`Number of lives can't be negative or > 3`);
  }

  return Object.assign({}, gameObj, {
    lives: lives
  });
};
