import * as dom from 'dom-helpers';
import artistElement from 'template-artist';

/**
 * welcome page data structure
 * @const
 * @type {object}
 */
const welcome = {
  game_name: 'Угадай мелодию',
  play_button: 'Начать игру',
  content: {
    title: 'Правила игры',
    text: 'Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов. ' +
          'На&nbsp;каждую мелодию всего 3 варианта ответа. Удачи!'
  }
};

const logo = `<section class="logo" title="${welcome.game_name}"><h1>${welcome.game_name}</h1></section>`;

const button = `<button class="main-play">${welcome.play_button}</button>`;

const content = `
  <h2 class="title main-title">${welcome.content.title}</h2>
  <p class="text main-text">
    ${welcome.content.text}
  </p>`;


/**
 * welcome page template
 * @const
 * @type {string}
 */
const moduleString = `<section class="main main--welcome">
    ${logo}
    ${button}
    ${content}
  </section>`;

/**
 * welcome DOM node
 * @const
 * @type {Node}
 */
const element = dom.getElementFromTemplate(moduleString);

const playButton = element.querySelector('.main-play');
/**
 * event listener for mouse click on play button
 * when clicked, the artist page is rendered
 */
playButton.addEventListener('click', () => {
  dom.renderElement(artistElement);
  window.initializeCountdown();
});

export default element;
