import AbstractView from './abstract-view';
import {gameStart} from '../game';

class WelcomeView extends AbstractView {

  constructor(inputData) {
    super(inputData);
  }

  getMarkup() {
    const logo = `<section class="logo" title="${this.inputData.gameName}"><h1>${this.inputData.gameName}</h1></section>`;
    const button = `<button class="main-play">${this.inputData.playButton}</button>`;
    const content = `
  <h2 class="title main-title">${this.inputData.content.title}</h2>
  <p class="text main-text">
    ${this.inputData.content.text}
  </p>`;

    return `<section class="main main--welcome">
    ${logo}
    ${button}
    ${content}
  </section>`;
  }


  bindHandlers() {
    const playButton = this.element.querySelector('.main-play');
    /**
     * event listener for mouse click on play button
     * when clicked, the first question is rendered
     */
    playButton.addEventListener('click', () => {
      gameStart();
    });
  }
}

export default (data) => new WelcomeView(data);
