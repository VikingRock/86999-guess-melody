import * as dom from 'dom-helpers';
import makeElement from 'template-artist';

/**
 * artist page data structure
 * @const
 * @type {object}
 */
const artist = {
  text: 'Кто исполняет эту песню?',
  data: {
    audio: '/audio/42.mp3'
  },
  timer: {
    minutes: 2,
    seconds: 0
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
};

export default (inputData) => {

  const logo = `<section class="logo" title="${inputData.gameName}"><h1>${inputData.gameName}</h1></section>`;

  const button = `<button class="main-play">${inputData.playButton}</button>`;

  const content = `
  <h2 class="title main-title">${inputData.content.title}</h2>
  <p class="text main-text">
    ${inputData.content.text}
  </p>`;


  /**
   * welcome page template
   * @const
   * @type {string}
   */
  const moduleString = `<section class="main main--welcome">
    ${logo}
    ${button}
    ${content}
  </section>`;

  /**
   * welcome DOM node
   * @const
   * @type {Node}
   */
  const element = dom.getElementFromTemplate(moduleString);

  const playButton = element.querySelector('.main-play');
  /**
   * event listener for mouse click on play button
   * when clicked, the artist page is rendered
   */
  playButton.addEventListener('click', () => {
    dom.renderElement(makeElement(artist));
    window.stopFn = window.initializeCountdown();
  });

  return element;
};
