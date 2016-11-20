import * as dom from './dom-helpers';
import welcomeElement from './template-welcome';

const moduleString = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const resultElement = dom.getElementFromTemplate(moduleString);

const replayButton = resultElement.querySelector('.main-replay');
replayButton.addEventListener('click', (evt) => {
  dom.renderElement(welcomeElement);
});

export default resultElement;
