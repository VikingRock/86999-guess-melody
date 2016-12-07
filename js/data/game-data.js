/** @enum {object} */
export const TYPES = {
  WELCOME: 'WELCOME',
  ARTIST: 'ARTIST',
  GENRE: 'GENRE',
  RESULT: 'RESULT'
};

/**
 * questions array
 * @type {array}
 */
export const questions = [
  {
    type: TYPES.ARTIST,
    text: 'Кто исполняет эту песню?',
    data: {
      audio: '/audio/42.mp3'
    },
    answers: [
      {
        isCorrect: true,
        data: {
          name: 'Пелагея',
          image: '/img/pelageya.jpeg'
        }
      },
      {
        isCorrect: false,
        data: {
          name: 'Краснознаменная дивизия имени моей бабушки',
          image: '/img/babushka.jpeg'
        }
      },
      {
        isCorrect: false,
        data: {
          name: 'Lorde',
          image: '/img/lorde.jpeg'
        }
      }
    ]
  },
  {
    type: TYPES.GENRE,
    text: 'Выберите инди-рок треки',
    data: null,
    answers: [
      {
        isCorrect: true,
        data: {
          audio: '/audio/1.mp3'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: '/audio/2.mp3'
        }
      },
      {
        isCorrect: true,
        data: {
          audio: '/audio/3.mp3'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: '/audio/4.mp3'
        }
      }
    ]
  },
  {
    type: TYPES.ARTIST,
    text: 'Кто исполняет эту песню?',
    data: {
      audio: '/audio/43.mp3'
    },
    answers: [
      {
        isCorrect: true,
        data: {
          name: 'Black Sabbath',
          image: '/img/black-sabbath.jpeg'
        }
      },
      {
        isCorrect: false,
        data: {
          name: 'P.O.D',
          image: '/img/pod.jpeg'
        }
      },
      {
        isCorrect: false,
        data: {
          name: 'USB',
          image: '/img/usb.jpeg'
        }
      }
    ]
  },
  {
    type: TYPES.GENRE,
    text: 'Выберите Industrial треки',
    data: null,
    answers: [
      {
        isCorrect: true,
        data: {
          audio: '/audio/11.mp3'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: '/audio/12.mp3'
        }
      },
      {
        isCorrect: true,
        data: {
          audio: '/audio/13.mp3'
        }
      }
    ]
  },
  {
    type: TYPES.ARTIST,
    text: 'Кто исполняет эту песню?',
    data: {
      audio: '/audio/63.mp3'
    },
    answers: [
      {
        isCorrect: false,
        data: {
          name: 'ABBA',
          image: '/img/abba.jpeg'
        }
      },
      {
        isCorrect: false,
        data: {
          name: 'UDO',
          image: '/img/udo.jpeg'
        }
      },
      {
        isCorrect: true,
        data: {
          name: 'A-HA',
          image: '/img/aha.jpeg'
        }
      }
    ]
  },
  {
    type: TYPES.GENRE,
    text: 'Выберите Hip-Hop треки',
    data: null,
    answers: [
      {
        isCorrect: true,
        data: {
          audio: '/audio/41.mp3'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: '/audio/42.mp3'
        }
      },
      {
        isCorrect: true,
        data: {
          audio: '/audio/43.mp3'
        }
      }
    ]
  },
  {
    type: TYPES.GENRE,
    text: 'Выберите Reggae треки',
    data: null,
    answers: [
      {
        isCorrect: true,
        data: {
          audio: '/audio/71.mp3'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: '/audio/72.mp3'
        }
      },
      {
        isCorrect: true,
        data: {
          audio: '/audio/73.mp3'
        }
      }
    ]
  },
  {
    type: TYPES.ARTIST,
    text: 'Кто исполняет эту песню?',
    data: {
      audio: '/audio/93.mp3'
    },
    answers: [
      {
        isCorrect: true,
        data: {
          name: 'U2',
          image: '/img/u2.jpeg'
        }
      },
      {
        isCorrect: false,
        data: {
          name: 'Muse',
          image: '/img/muse.jpeg'
        }
      },
      {
        isCorrect: false,
        data: {
          name: 'Yes',
          image: '/img/yes.jpeg'
        }
      }
    ]
  },
  {
    type: TYPES.GENRE,
    text: 'Выберите Symphonic Metal треки',
    data: null,
    answers: [
      {
        isCorrect: true,
        data: {
          audio: '/audio/171.mp3'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: '/audio/172.mp3'
        }
      },
      {
        isCorrect: true,
        data: {
          audio: '/audio/173.mp3'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: '/audio/175.mp3'
        }
      }
    ]
  },
  {
    type: TYPES.GENRE,
    text: 'Выберите Heavy Metal треки',
    data: null,
    answers: [
      {
        isCorrect: true,
        data: {
          audio: '/audio/721.mp3'
        }
      },
      {
        isCorrect: true,
        data: {
          audio: '/audio/722.mp3'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: '/audio/723.mp3'
        }
      }
    ]
  }
];

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
