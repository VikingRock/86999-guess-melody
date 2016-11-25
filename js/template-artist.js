import * as dom from 'dom-helpers';
import genreElement from 'template-genre';

/**
 * artist page data structure
 * @const
 * @type {object}
 */
const artist = {
  timer: {
    minutes: 2,
    seconds: 0
  },
  question: {
    text: 'Кто исполняет эту песню?',
    data: {
      audio: '/audio/42.mp3'
    },
    answers: [
      {
        isCorrect: true,
        data: {
          name: 'Пелагея',
          image: '/img/pelageya.jpeg'
        }
      },
      {
        isCorrect: false,
        data: {
          name: 'Краснознаменная дивизия имени моей бабушки',
          image: '/img/babushka.jpeg'
        }
      },
      {
        isCorrect: false,
        data: {
          name: 'Lorde',
          image: '/img/lorde.jpeg'
        }
      }
    ]
  }
};

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
        <span class="timer-value-mins">${addLeadingZero(artist.timer.minutes)}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${addLeadingZero(artist.timer.seconds)}</span>
      </div>
    </svg>`;

/**
 * renders option block from template
 * @param {number} index
 * @param {string} name
 * @param {string} image
 * @return {string} rendered html
 */
const renderOption = (index, name, image) => `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index + 1}" name="answer" value="val-${index + 1}" />
          <label class="main-answer" for="answer-${index + 1}">
            <img class="main-answer-preview" src="${image}">
            ${name}
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

      <h2 class="title main-title">${artist.question.text}</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${artist.question.answers
                .map((item, idx) => renderOption(idx, item.data.name, item.data.image))
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
 * when clicked, the genre page is rendered
 */
answerList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('main-answer') || evt.target.classList.contains('main-answer-preview')) {
    window.stopFn();
    dom.renderElement(genreElement);
  }
});

export default element;
