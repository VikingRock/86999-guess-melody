import * as dom from './dom-helpers';
import nextQuestion from './game';

export default (inputData) => {

  /**
   * renders option block from template
   * @param {number} index
   * @param {object} data - contains option's image and name
   * @return {string} rendered html
   */
  const renderOption = (index, data) => `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${index}" />
          <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${data.image}">
            ${data.name}
          </label>
        </div>`;

  /**
   * artist page template
   * @const
   * @type {string}
   */
  const moduleString = `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">${inputData.text}</h2>
      <div class="player-wrapper" data-audio="${inputData.data.audio}"></div>
      <form class="main-list">
        ${inputData.answers
    .map((item, idx) => renderOption(idx, item.data))
    .join('')}
      </form>
    </div>
  </section>`;

  /**
   * artist DOM node
   * @const
   * @type {Node}
   */
  const element = dom.getElementFromTemplate(moduleString);

  const answerList = element.querySelector('.main-list');

  /**
   * event listener for mouse click on artist element
   * when clicked, the next question is rendered
   */
  answerList.addEventListener('change', (evt) => {
    const choice = evt.target;
    if (!choice.classList.contains('main-answer-r')) {
      return;
    }
    const qResult = inputData.answers[choice.value].isCorrect;
    nextQuestion(qResult);
  });

  return element;
};
