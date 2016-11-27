import * as dom from 'dom-helpers';
import nextQuestion from 'game';

export default (inputData, questionNumber) => {

  /**
   * adds a zero before number if it is less than 10
   * @param {number} val
   * @return {string}
   */
  const addLeadingZero = (val) => val < 10 ? `0${val}` : val;

  /**
   * timer block template
   */
  const timer = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${addLeadingZero(inputData.timer.minutes)}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${addLeadingZero(inputData.timer.seconds)}</span>
      </div>
    </svg>`;

  /**
   * renders option block from template
   * @param {number} index
   * @param {object} data - contains option's image and name
   * @return {string} rendered html
   */
  const renderOption = (index, data) => `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index + 1}" name="answer" value="val-${index + 1}" />
          <label class="main-answer" for="answer-${index + 1}">
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
    ${timer}
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
   * calling next question from game.js
   * and removing timer-end listener
   */
  const goToNextQuestion = () => {
    nextQuestion();
    document.body.removeEventListener('timer-end', goToNextQuestion);
  };

  /**
   * event listener for mouse click on artist element
   * when clicked, the next question is rendered
   */
  answerList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('main-answer') || evt.target.classList.contains('main-answer-preview')) {
      goToNextQuestion();
    }
  });

  /**
   * when timer has ended - switch to next question
   */
  document.body.addEventListener('timer-end', goToNextQuestion, false);

  return element;
};
