import AbstractView from './abstract-view';
import Application from 'application';

class WelcomeView extends AbstractView {

  constructor(inputData) {
    super(inputData);
    this.startGame = this.startGame.bind(this);
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

  startGame() {
    this.clearHandlers();
    Application.showGame();
  }

  bindHandlers() {
    this.playButton = this.element.querySelector('.main-play');
    /**
     * event listener for mouse click on play button
     * when clicked, the first question is rendered
     */
    this.playButton.addEventListener('click', this.startGame);
  }

  clearHandlers() {
    this.playButton.removeEventListener('click', this.startGame);
  }
}

export default (data) => new WelcomeView(data);
