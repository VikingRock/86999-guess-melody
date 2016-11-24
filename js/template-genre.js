import * as dom from 'dom-helpers';
import resultElement from 'template-result';

/**
 * genre page data structure
 * @const
 * @type {object}
 */
const genre = {
  question: 'Выберите инди-рок треки',
  answers: [
    '/audio/1.mp3',
    '/audio/2.mp3',
    '/audio/3.mp3',
    '/audio/4.mp3'
  ],
  submit: 'Ответить'
};

/**
 * renders option block from template
 * @param {number} index
 * @param {string} audio
 * @return {string} rendered html
 */
const renderOption = (index, audio) => `<div class="genre-answer">
        <div class="player-wrapper" data-audio="${audio}"></div>
        <input type="checkbox" name="answer" value="answer-${index + 1}" id="a-${index + 1}">
        <label class="genre-answer-check" for="a-${index + 1}"></label>
      </div>`;

/**
 * genre page template
 * @const
 * @type {string}
 */
const moduleString = `<section class="main main--level main--level-genre">
    <h2 class="title">${genre.question}</h2>
    <form class="genre">
      ${genre.answers
              .map((it, idx) => renderOption(idx, it))
              .join('')}
      <button class="genre-answer-send" type="submit">${genre.submit}</button>
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

/**
 * if there is at least one checked checkbox, enable answer button
 */
const checkAnswered = () => {
  if ( element.querySelector('.genre-answer input:checked') === null ) {
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
 * if button is enabled, result page is rendered
 */
answerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  dom.renderElement(resultElement);
});

export default element;
