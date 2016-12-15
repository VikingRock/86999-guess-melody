/** @enum {object} */
export const TYPES = {
  WELCOME: 'welcome',
  ARTIST: 'artist',
  GENRE: 'genre',
  RESULT: 'result',
  ERROR: 'error'
};

/** @enum {object} */
const Genre = {
  COUNTRY: 'country',
  BLUES: 'blues',
  FOLK: 'folk',
  CLASSICAL: 'classical',
  ELECTRONIC: 'electronic',
  HIP_HOP: 'hip-hop',
  JAZZ: 'jazz',
  POP: 'pop',
  ROCK: 'rock'
};

/**
 * questions array
 * @type {array}
 */
export const questions = [{
  'type': 'genre',
  'question': 'Выберите классику',
  'genre': 'classical',
  'answers': [{
    'src': 'https://freemusicarchive.org/music/listen/2fd48b0df6844cd1b8c0d352855f73ab0a5df1f7',
    'genre': 'jazz'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/d956f3b3c493017c7443bfa3c71654c04ef26c9b',
    'genre': 'rock'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/a99ee740966ef44fbc9723a0765011ce384bdeb4',
    'genre': 'classical'
  }, {'src': 'https://freemusicarchive.org/music/listen/35f7ee590b3581c29adf2fb19b8744f13d6b0581', 'genre': 'folk'}]
}, {
  'type': 'artist',
  'question': 'Кто исполняет эту песню?',
  'src': 'https://freemusicarchive.org/music/listen/35f7ee590b3581c29adf2fb19b8744f13d6b0581',
  'answers': [{
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Paper_Navy_-_20120226181728099.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Paper Navy', 'isCorrect': true
  }, {
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Tours_-_20120822132441990.png?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Tours', 'isCorrect': false
  }, {
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Waylon_Thornton_-_2012061793125465.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Waylon Thornton', 'isCorrect': false
  }]
}, {
  'type': 'artist',
  'question': 'Кто исполняет эту песню?',
  'src': 'https://freemusicarchive.org/music/listen/2fd48b0df6844cd1b8c0d352855f73ab0a5df1f7',
  'answers': [{
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Tours_-_20120822132441990.png?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Tours', 'isCorrect': false
  }, {
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Stephan_Siebert_-_20160712113333691.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Stephan Siebert', 'isCorrect': true
  }, {
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Broke_For_Free_-_2013011621055318.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Broke For Free', 'isCorrect': false
  }]
}, {
  'type': 'genre',
  'question': 'Выберите все роковые песни',
  'genre': 'rock',
  'answers': [{
    'src': 'https://freemusicarchive.org/music/listen/f018f0125018734cf53b807c5b1b735c001a7edf',
    'genre': 'hip-hop'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/e35ff4ce46733cc01f7d87bfc9b87d4b3f079a08',
    'genre': 'rock'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/335c3b08aaf1fcd662505fd06ddd978ad81bc89a',
    'genre': 'country'
  }, {'src': 'https://freemusicarchive.org/music/listen/6b409eb3134971b8c875d52f72467cbe33748510', 'genre': 'folk'}]
}, {
  'type': 'genre',
  'question': 'Выберите все роковые песни',
  'genre': 'rock',
  'answers': [{
    'src': 'https://freemusicarchive.org/music/listen/d956f3b3c493017c7443bfa3c71654c04ef26c9b',
    'genre': 'rock'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/e95cd382fff244ee2c31a0f05b5c78a3dc5bdecc',
    'genre': 'pop'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/00c8e4f968d5911f9f3fd89cfb3493e4eb27bc03',
    'genre': 'electronic'
  }, {'src': 'https://freemusicarchive.org/music/listen/7725568003f69bebe3fd7c168aa28e771b05aeaf', 'genre': 'hip-hop'}]
}, {
  'type': 'genre',
  'question': 'Выберите все фолковые песни',
  'genre': 'folk',
  'answers': [{
    'src': 'https://freemusicarchive.org/music/listen/e35ff4ce46733cc01f7d87bfc9b87d4b3f079a08',
    'genre': 'rock'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/75d2c239291bea7cf2cd6a5f62062cccf3e92096',
    'genre': 'folk'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/2fd48b0df6844cd1b8c0d352855f73ab0a5df1f7',
    'genre': 'jazz'
  }, {'src': 'https://freemusicarchive.org/music/listen/6fa54031f4f224b94303ab86e293553dace6f442', 'genre': 'jazz'}]
}, {
  'type': 'genre',
  'question': 'Выберите все электрические песни',
  'genre': 'electronic',
  'answers': [{
    'src': 'https://freemusicarchive.org/music/listen/6b409eb3134971b8c875d52f72467cbe33748510',
    'genre': 'folk'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/e35ff4ce46733cc01f7d87bfc9b87d4b3f079a08',
    'genre': 'rock'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/c929c0a967bd8aa607b2c169edf0b42a4d481b51',
    'genre': 'electronic'
  }, {'src': 'https://freemusicarchive.org/music/listen/2fd48b0df6844cd1b8c0d352855f73ab0a5df1f7', 'genre': 'jazz'}]
}, {
  'type': 'artist',
  'question': 'Кто исполняет эту песню?',
  'src': 'https://freemusicarchive.org/music/listen/2fd48b0df6844cd1b8c0d352855f73ab0a5df1f7',
  'answers': [{
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Waylon_Thornton_-_2012061793125465.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Waylon Thornton', 'isCorrect': false
  }, {
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Stephan_Siebert_-_20160712113333691.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Stephan Siebert', 'isCorrect': true
  }, {
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Paper_Navy_-_20120226181728099.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Paper Navy', 'isCorrect': false
  }]
}, {
  'type': 'artist',
  'question': 'Кто исполняет эту песню?',
  'src': 'https://freemusicarchive.org/music/listen/e95cd382fff244ee2c31a0f05b5c78a3dc5bdecc',
  'answers': [{
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Gillicuddy_-_20150103121851574.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Gillicuddy', 'isCorrect': false
  }, {
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Waylon_Thornton_-_2012061793125465.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Waylon Thornton', 'isCorrect': true
  }, {
    'image': {
      'url': 'https://freemusicarchive.org/file/images/artists/Jahzzar_-_20160323124322227.jpg?width=300&height=300',
      'width': 300,
      'height': 300
    }, 'title': 'Jahzzar', 'isCorrect': false
  }]
}, {
  'type': 'genre',
  'question': 'Выберите все фолковые песни',
  'genre': 'folk',
  'answers': [{
    'src': 'https://freemusicarchive.org/music/listen/f018f0125018734cf53b807c5b1b735c001a7edf',
    'genre': 'hip-hop'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/2fd48b0df6844cd1b8c0d352855f73ab0a5df1f7',
    'genre': 'jazz'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/6b409eb3134971b8c875d52f72467cbe33748510',
    'genre': 'folk'
  }, {
    'src': 'https://freemusicarchive.org/music/listen/c929c0a967bd8aa607b2c169edf0b42a4d481b51',
    'genre': 'electronic'
  }]
}];

export const questionsOld = [
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
