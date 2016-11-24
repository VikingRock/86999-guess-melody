import * as dom from 'dom-helpers';
import welcomeElement from 'template-welcome';

/**
 * player stats data structure
 * @const
 * @type {object}
 */
const stats = {
  time: 2,
  melodies_count: 4,
  percents: 80
};

/**
 * result page data structure
 * @const
 * @type {object}
 */
const result = {
  game_name: 'Угадай мелодию',
  content: {
    title: 'Вы настоящий меломан!',
    stats_text: `За ${stats.time} минуты<br>вы отгадали ${stats.melodies_count} мелодии`,
    comparison_text: `Это лучше чем у ${stats.percents}% игроков`
  },
  play_again: 'Сыграть ещё раз'
};

const logo = `<section class="logo" title="${result.game_name}"><h1>${result.game_name}</h1></section>`;

const content = `<h2 class="title">${result.content.title}</h2>
    <div class="main-stat">${result.content.stats_text}</div>
    <span class="main-comparison">${result.content.comparison_text}</span>`;

const button = `<span role="button" tabindex="0" class="main-replay">${result.play_again}</span>`;

/**
 * result page template
 * @const
 * @type {string}
 */
const moduleString = `<section class="main main--result">
    ${logo}
    ${content}
    ${button}
  </section>`;

/**
 * result DOM node
 * @const
 * @type {Node}
 */
const element = dom.getElementFromTemplate(moduleString);

const replayButton = element.querySelector('.main-replay');

/**
 * event listener for mouse click on replay button;
 * if clicked, welcome page is rendered
 */
replayButton.addEventListener('click', (evt) => {
  dom.renderElement(welcomeElement);
});

export default element;
