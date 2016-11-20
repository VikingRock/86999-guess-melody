import * as dom from './dom-helpers';
import welcomeElement from './template-welcome';

/**
 * result page template
 * @const
 * @type {string}
 */
const moduleString = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

/**
 * result DOM node
 * @const
 * @type {Node}
 */
const resultElement = dom.getElementFromTemplate(moduleString);

const replayButton = resultElement.querySelector('.main-replay');
/**
 * event listener for mouse click on replay button;
 * if clicked, welcome page is rendered
 */
replayButton.addEventListener('click', (evt) => {
  dom.renderElement(welcomeElement);
});

export default resultElement;
