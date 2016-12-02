import * as dom from './dom-helpers';

export default (inputData) => {

  const logo = `<section class="logo" title="${inputData.gameName}"><h1>${inputData.gameName}</h1></section>`;

  const content = `<h2 class="title">${inputData.content.title}</h2>
    <div class="main-stat">За ${inputData.stats.time} минуты<br>вы отгадали ${inputData.stats.melodiesCount} мелодии</div>
    <span class="main-comparison">Это лучше чем у ${inputData.stats.percents}% игроков</span>`;

  const button = `<span role="button" tabindex="0" class="main-replay">${inputData.replayButton}</span>`;

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
    window.location.reload(false);
  });

  return element;
};
