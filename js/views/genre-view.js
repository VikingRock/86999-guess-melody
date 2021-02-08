import AbstractView from './abstract-view';
import GamePresenter from '../game-presenter';
import player from '../player';

class GenreView extends AbstractView {

  constructor(inputData) {
    super(inputData);
    this._selectGenre = this._selectGenre.bind(this);
    this._checkAnswerEnabled = this._checkAnswerEnabled.bind(this);
    this._deletePlayers = [];
  }

  /**
   * renders option block from template
   * @param {number} index
   * @return {string} rendered html
   */
  _renderOption(index) {
    return `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="${index}" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`;
  }

  /**
   * event listener for mouse click on answer button;
   * if button is enabled, next question is rendered
   * and all form elements state is set to default
   * @param {object} evt
   */
  _selectGenre(evt) {
    evt.preventDefault();
    let allAnswersAreCorrect = true;
    const allOptions = this.element.querySelectorAll('.genre-answer input');
    const genre = this.inputData.genre;

    for (const item of allOptions) {
      let selectedGenre = this.inputData.answers[item.value].genre;
      if ( (item.checked && (selectedGenre !== genre) ) ||
        (!item.checked && (selectedGenre === genre) ) ) {
        allAnswersAreCorrect = false;
      }
      item.checked = false;
    }
    this._answerButton.disabled = true;
    this.clearHandlers();
    GamePresenter.questionRouter(allAnswersAreCorrect);
  }

  /**
   * if there is at least one checked checkbox, enable answer button
   * @param {object} evt
   */
  _checkAnswerEnabled(evt) {
    if (evt.target.getAttribute('name') === 'answer') {
      this._checkedAnswerOptions = this.element.querySelectorAll('.genre-answer input:checked');
      if ( this._checkedAnswerOptions.length === 0) {
        this._answerButton.disabled = true;
      } else {
        this._answerButton.disabled = false;
      }
    }
  }

  getMarkup() {
    return `<section class="main main--level main--level-genre">
    <h2 class="title">${this.inputData.question}</h2>
    <form class="genre">
      ${this.inputData.answers
          .map((item, idx) => this._renderOption(idx))
          .join('')}
      <button class="genre-answer-send" type="submitButton">Ответить</button>
    </form>
  </section>`;
  }

  bindHandlers() {
    this._answerButton = this.element.querySelector('.genre-answer-send');

    const elements = this.element.querySelectorAll('.player-wrapper');
    for (const item of elements) {
      const newDel = player(item, this.inputData.answers[this._deletePlayers.length].src, false, true);
      this._deletePlayers.push(newDel);
    }

    /**
     * locating and disabling answer button by default
     */
    this._answerButton.disabled = true;
    this._checkedAnswerOptions = [];
    this._answerBlock = this.element.querySelector('.genre');

    this._answerBlock.addEventListener('change', this._checkAnswerEnabled);
    this._answerButton.addEventListener('click', this._selectGenre);
  }

  clearHandlers() {
    this._answerButton.removeEventListener('click', this._selectGenre);
    this._answerBlock.removeEventListener('change', this._checkAnswerEnabled);
    this._deletePlayers.forEach((item) => {
      item();
    });
  }
}

export default (data) => new GenreView(data);
