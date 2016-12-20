/** @enum {object} */
export const TYPES = {
  WELCOME: 'welcome',
  ARTIST: 'artist',
  GENRE: 'genre',
  RESULT: 'result',
  ERROR: 'error'
};

/**
 * result page data structure
 * @const
 * @type {object}
 */
export const result = {
  gameName: 'Угадай мелодию',
  content: {
    title: 'Вы настоящий меломан!'
  },
  stats: {
    time: null,
    correctAnswers: null,
    percents: false
  },
  replayButton: 'Сыграть ещё раз'
};

/**
 * welcome page data structure
 * @const
 * @type {object}
 */
export const welcome = {
  gameName: 'Угадай мелодию',
  content: {
    title: 'Правила игры',
    text: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.
          На&nbsp;каждую мелодию всего 3 варианта ответа. Удачи!`
  },
  playButton: 'Начать игру'
};
