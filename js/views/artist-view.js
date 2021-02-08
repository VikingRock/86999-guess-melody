import AbstractView from './abstract-view';
import GamePresenter from '../game-presenter';
import player from '../player';

class ArtistView extends AbstractView {

  constructor(inputData) {
    super(inputData);
    this._selectArtist = this._selectArtist.bind(this);
  }

  /**
   * renders option block from template
   * @param {number} index
   * @param {object} data - contains option's image and name
   * @return {string} rendered html
   */
  _renderOption(index, data) {
    return `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${index}" />
          <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${data.image.url} width="${data.image.width}" height="${data.image.height}">
            ${data.title}
          </label>
        </div>`;
  }

  /**
   * event listener for mouse click on artist element
   * when clicked, the next question is rendered
   * @param {object} evt
   */
  _selectArtist(evt) {
    const choice = evt.target;
    if (!choice.classList.contains('main-answer-r')) {
      return;
    }
    const qResult = this.inputData.answers[choice.value].isCorrect;
    this.clearHandlers();
    GamePresenter.questionRouter(qResult);
  }

  getMarkup() {
    return `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">${this.inputData.question}</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${this.inputData.answers
            .map((item, idx) => this._renderOption(idx, item))
            .join('')}
      </form>
      </div>
    </section>`;
  }

  bindHandlers() {
    this._answerList = this.element.querySelector('.main-list');
    const element = this.element.querySelector('.player-wrapper');

    this._deletePlayer = player(element, this.inputData.src, true, true);
    this._answerList.addEventListener('change', this._selectArtist);
  }

  clearHandlers() {
    this._deletePlayer();
    this._answerList.removeEventListener('change', this._selectArtist);
  }
}

export default (data) => new ArtistView(data);
