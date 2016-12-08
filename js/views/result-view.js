import AbstractView from './abstract-view';

class ResultView extends AbstractView {

  constructor(inputData) {
    super(inputData);
  }

  getMarkup() {
    const logo = `<section class="logo" title="${this.inputData.gameName}"><h1>${this.inputData.gameName}</h1></section>`;

    const content = `<h2 class="title">${this.inputData.content.title}</h2>
    <div class="main-stat">За ${this.inputData.stats.time.minutes} минут ${this.inputData.stats.time.seconds} секунд
    <br>вы отгадали ${this.inputData.stats.correctAnswers} мелодии</div>
    <span class="main-comparison">Это лучше чем у ${this.inputData.stats.percents}% игроков</span>`;

    const button = `<span role="button" tabindex="0" class="main-replay">${this.inputData.replayButton}</span>`;

    return `<section class="main main--result">
    ${logo}
    ${content}
    ${button}
  </section>`;
  }


  bindHandlers() {
    const replayButton = this.element.querySelector('.main-replay');

    /**
     * event listener for mouse click on replay button;
     * if clicked, welcome page is rendered
     */
    replayButton.addEventListener('click', () => {
      window.location.reload(false);
    });
  }
}

export default (data) => new ResultView(data);
