import * as dom from 'dom-helpers';
import nextQuestion from 'game';

export default (inputData) => {

  /**
   * renders option block from template
   * @param {number} index
   * @param {object} data - contains option's audio
   * @return {string} rendered html
   */
  const renderOption = (index, data) => `<div class="genre-answer">
        <div class="player-wrapper" data-audio="${data.audio}"></div>
        <input type="checkbox" name="answer" value="answer-${index + 1}" id="a-${index + 1}">
        <label class="genre-answer-check" for="a-${index + 1}"></label>
      </div>`;

  /**
   * genre page template
   * @const
   * @type {string}
   */
  const moduleString = `<section class="main main--level main--level-genre">
    <h2 class="title">${inputData.text}</h2>
    <form class="genre">
      ${inputData.answers
    .map((item, idx) => renderOption(idx, item.data))
    .join('')}
      <button class="genre-answer-send" type="submitButton">Ответить</button>
    </form>
  </section>`;

  /**
   * genre DOM node
   * @const
   * @type {Node}
   */
  const element = dom.getElementFromTemplate(moduleString);

  /**
   * locating and disabling answer button by default
   */
  const answerButton = element.querySelector('.genre-answer-send');
  answerButton.disabled = true;

  let checkedAnswerOptions = [];

  /**
   * if there is at least one checked checkbox, enable answer button
   */
  const checkAnswered = () => {
    checkedAnswerOptions = element.querySelectorAll('.genre-answer input:checked');
    if ( checkedAnswerOptions.length === 0) {
      answerButton.disabled = true;
    } else {
      answerButton.disabled = false;
    }
  };

  const answerBlock = element.querySelector('.genre');

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
    for (const item of checkedAnswerOptions) {
      item.checked = false;
    }
    answerButton.disabled = true;
    nextQuestion();
  });

  return element;
};
