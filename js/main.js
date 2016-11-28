import * as dom from 'dom-helpers';
import makeElement from 'template-welcome';

/**
 * welcome page data structure
 * @const
 * @type {object}
 */
const welcome = {
  gameName: 'Угадай мелодию',
  content: {
    title: 'Правила игры',
    text: `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.
          На&nbsp;каждую мелодию всего 3 варианта ответа. Удачи!`
  },
  playButton: 'Начать игру'
};

window.onload = () => {
  dom.renderElement(makeElement(welcome));
};
