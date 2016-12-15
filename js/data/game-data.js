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
    time: 2,
    correctAnswers: 4,
    percents: 80
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

/**
 * stats of previous games
 */
export const statistics = [
  {time: 81, answers: 8, recent: false},
  {time: 80, answers: 9, recent: false},
  {time: 92, answers: 10, recent: false},
  {time: 120, answers: 5, recent: false},
  {time: 104, answers: 3, recent: false},
  {time: 110, answers: 7, recent: false},
  {time: 16, answers: 2, recent: false},
  {time: 35, answers: 0, recent: false}
];
