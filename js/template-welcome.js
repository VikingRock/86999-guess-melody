import * as dom from 'dom-helpers';
import {game} from './data/game-data';
import {gameStart} from 'game';

export default (inputData) => {

  const logo = `<section class="logo" title="${inputData.gameName}"><h1>${inputData.gameName}</h1></section>`;

  const button = `<button class="main-play">${inputData.playButton}</button>`;

  const content = `
  <h2 class="title main-title">${inputData.content.title}</h2>
  <p class="text main-text">
    ${inputData.content.text}
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
   * when clicked, the first question is rendered
   */
  playButton.addEventListener('click', () => {
    gameStart(game);
  });

  return element;
};
