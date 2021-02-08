import AbstractView from './abstract-view';
import Application from 'application';

class ResultView extends AbstractView {

  constructor(inputData) {
    super(inputData);
    this._replay = this._replay.bind(this);
  }

  _replay() {
    this.clearHandlers();
    Application.showGame();
  }

  getMarkup() {
    const logo = `<section class="logo" title="${this.inputData.gameName}"><h1>${this.inputData.gameName}</h1></section>`;
    let percents;

    if (this.inputData.stats.percents !== false) {
      percents = `<span class="main-comparison">Это лучше чем у ${this.inputData.stats.percents}% игроков</span>`;
    } else {
      percents = '<span class="main-comparison">Статистика сервера недоступна</span>';
    }

    const content = `<h2 class="title">${this.inputData.content.title}</h2>
    <div class="main-stat">За ${this.inputData.stats.time.minutes} минут ${this.inputData.stats.time.seconds} секунд
    <br>вы отгадали ${this.inputData.stats.correctAnswers} мелодии</div>`;

    const button = `<span role="button" tabindex="0" class="main-replay">${this.inputData.replayButton}</span>`;

    return `<section class="main main--result">
    ${logo}
    ${content}
    ${percents}
    ${button}
  </section>`;
  }

  bindHandlers() {
    this._replayButton = this.element.querySelector('.main-replay');

    /**
     * event listener for mouse click on _replay button;
     * if clicked, welcome page is rendered
     */
    this._replayButton.addEventListener('click', this._replay);
  }

  clearHandlers() {
    this._replayButton.removeEventListener('click', this._replay);
  }
}

export default (data) => new ResultView(data);
