import AbstractView from './abstract-view';
import {questionRouter} from '../game';

class ArtistView extends AbstractView {

  constructor(inputData) {
    super(inputData);
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
            <img class="main-answer-preview" src="${data.image}">
            ${data.name}
          </label>
        </div>`;
  }

  getMarkup() {
    return `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">${this.inputData.text}</h2>
      <div class="player-wrapper" data-audio="${this.inputData.data.audio}"></div>
      <form class="main-list">
        ${this.inputData.answers
            .map((item, idx) => this.renderOption(idx, item.data))
            .join('')}
      </form>
      </div>
    </section>`;
  }


  bindHandlers() {
    const answerList = this.element.querySelector('.main-list');

    /**
     * event listener for mouse click on artist element
     * when clicked, the next question is rendered
     */
    answerList.addEventListener('change', (evt) => {
      const choice = evt.target;
      if (!choice.classList.contains('main-answer-r')) {
        return;
      }
      const qResult = this.inputData.answers[choice.value].isCorrect;
      questionRouter(qResult);
    });
  }
}

export default (data) => new ArtistView(data);
