import AbstractView from './abstract-view';
import GamePresenter from '../game-presenter';
import player from '../player';

class GenreView extends AbstractView {

  constructor(inputData) {
    super(inputData);
    this.selectGenre = this.selectGenre.bind(this);
    this.checkAnswerEnabled = this.checkAnswerEnabled.bind(this);
    this.deletePlayers = [];
  }

  /**
   * renders option block from template
   * @param {number} index
   * @return {string} rendered html
   */
  renderOption(index) {
    return `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="${index}" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`;
  }

  getMarkup() {
    return `<section class="main main--level main--level-genre">
    <h2 class="title">${this.inputData.question}</h2>
    <form class="genre">
      ${this.inputData.answers
          .map((item, idx) => this.renderOption(idx))
          .join('')}
      <button class="genre-answer-send" type="submitButton">Ответить</button>
    </form>
  </section>`;
  }

  /**
   * event listener for mouse click on answer button;
   * if button is enabled, next question is rendered
   * and all form elements state is set to default
   * @param {object} evt
   */
  selectGenre(evt) {
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
    this.answerButton.disabled = true;
    this.clearHandlers();
    GamePresenter.questionRouter(allAnswersAreCorrect);
  }

  /**
   * if there is at least one checked checkbox, enable answer button
   * @param {object} evt
   */
  checkAnswerEnabled(evt) {
    if (evt.target.getAttribute('name') === 'answer') {
      this.checkedAnswerOptions = this.element.querySelectorAll('.genre-answer input:checked');
      if ( this.checkedAnswerOptions.length === 0) {
        this.answerButton.disabled = true;
      } else {
        this.answerButton.disabled = false;
      }
    }
  }

  bindHandlers() {
    this.answerButton = this.element.querySelector('.genre-answer-send');

    const elements = this.element.querySelectorAll('.player-wrapper');
    for (const item of elements) {
      const newDel = player(item, this.inputData.answers[this.deletePlayers.length].src, false, true);
      this.deletePlayers.push(newDel);
    }

    /**
     * locating and disabling answer button by default
     */
    this.answerButton.disabled = true;
    this.checkedAnswerOptions = [];
    this.answerBlock = this.element.querySelector('.genre');

    this.answerBlock.addEventListener('change', this.checkAnswerEnabled);
    this.answerButton.addEventListener('click', this.selectGenre);
  }

  clearHandlers() {
    this.answerButton.removeEventListener('click', this.selectGenre);
    this.answerBlock.removeEventListener('change', this.checkAnswerEnabled);
    this.deletePlayers.forEach((item) => {
      item();
    });
  }
}

export default (data) => new GenreView(data);
