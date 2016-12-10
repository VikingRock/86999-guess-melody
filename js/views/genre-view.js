import AbstractView from './abstract-view';
import GamePresenter from '../game';

class GenreView extends AbstractView {

  constructor(inputData) {
    super(inputData);
  }

  /**
   * renders option block from template
   * @param {number} index
   * @param {object} data - contains option's option's audio
   * @return {string} rendered html
   */
  renderOption(index, data) {
    return `<div class="genre-answer">
        <div class="player-wrapper" data-audio="${data.audio}"></div>
        <input type="checkbox" name="answer" value="${index}" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`;
  }

  getMarkup() {
    return `<section class="main main--level main--level-genre">
    <h2 class="title">${this.inputData.text}</h2>
    <form class="genre">
      ${this.inputData.answers
          .map((item, idx) => this.renderOption(idx, item.data))
          .join('')}
      <button class="genre-answer-send" type="submitButton">Ответить</button>
    </form>
  </section>`;
  }


  bindHandlers() {
    /**
     * locating and disabling answer button by default
     */
    const answerButton = this.element.querySelector('.genre-answer-send');
    answerButton.disabled = true;

    let checkedAnswerOptions = [];

    /**
     * if there is at least one checked checkbox, enable answer button
     */
    const checkAnswered = () => {
      checkedAnswerOptions = this.element.querySelectorAll('.genre-answer input:checked');
      if ( checkedAnswerOptions.length === 0) {
        answerButton.disabled = true;
      } else {
        answerButton.disabled = false;
      }
    };

    const answerBlock = this.element.querySelector('.genre');

    /**
     * event listener for any checkbox state change;
     */
    answerBlock.addEventListener('change', (evt) => {
      if (evt.target.getAttribute('name') === 'answer') {
        checkAnswered();
      }
    });

    /**
     * event listener for mouse click on answer button;
     * if button is enabled, next question is rendered
     * and all form elements state is set to default
     */
    answerButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      let allAnswersAreCorrect = true;
      const allOptions = this.element.querySelectorAll('.genre-answer input');

      for (const item of allOptions) {
        if ( (item.checked && !this.inputData.answers[item.value].isCorrect) ||
          (!item.checked && this.inputData.answers[item.value].isCorrect) ) {
          allAnswersAreCorrect = false;
        }
        item.checked = false;
      }
      answerButton.disabled = true;
      GamePresenter.questionRouter(allAnswersAreCorrect);
    });
  }
}

export default (data) => new GenreView(data);
