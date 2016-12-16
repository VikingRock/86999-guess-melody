import AbstractView from './abstract-view';
import GamePresenter from '../game-presenter';
import player from '../player';

class ArtistView extends AbstractView {

  constructor(inputData) {
    super(inputData);
    this.selectArtist = this.selectArtist.bind(this);
  }

  /**
   * renders option block from template
   * @param {number} index
   * @param {object} data - contains option's image and name
   * @return {string} rendered html
   */
  renderOption(index, data) {
    return `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${index}" />
          <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${data.image.url} width="${data.image.width}" height="${data.image.height}">
            ${data.title}
          </label>
        </div>`;
  }

  getMarkup() {
    return `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">${this.inputData.question}</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${this.inputData.answers
            .map((item, idx) => this.renderOption(idx, item))
            .join('')}
      </form>
      </div>
    </section>`;
  }

  /**
   * event listener for mouse click on artist element
   * when clicked, the next question is rendered
   * @param {object} evt
   */
  selectArtist(evt) {
    const choice = evt.target;
    if (!choice.classList.contains('main-answer-r')) {
      return;
    }
    const qResult = this.inputData.answers[choice.value].isCorrect;
    this.clearHandlers();
    GamePresenter.questionRouter(qResult);
  }

  bindHandlers() {
    this.answerList = this.element.querySelector('.main-list');
    const element = this.element.querySelector('.player-wrapper');

    this.deletePlayer = player(element, this.inputData.src, true, true);
    this.answerList.addEventListener('change', this.selectArtist);
  }

  clearHandlers() {
    this.deletePlayer();
    this.answerList.removeEventListener('change', this.selectArtist);
  }
}

export default (data) => new ArtistView(data);
