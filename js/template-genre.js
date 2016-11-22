import * as dom from 'dom-helpers';
import resultElement from 'template-result';

/**
 * genre page template
 * @const
 * @type {string}
 */
const moduleString = `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
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
