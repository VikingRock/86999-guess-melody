import moduleOneElement from './module-1';
import moduleTwoElement from './module-2';
import moduleThreeElement from './module-3';
import moduleFourElement from './module-4';


let slides = [moduleOneElement, moduleTwoElement, moduleThreeElement, moduleFourElement];
let slidesLength = slides.length;
let current = 0;

let select = (index) => {
  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(slides[index], mainElement);
};

document.onkeydown = (evt) => {
  evt.preventDefault();

  switch (evt.keyCode) {
    case 37:
      if (current > 0) {
        select(--current);
      }
      break;
    case 39:
      if (current < slidesLength - 1) {
        select(++current);
      }
      break;
  }
};

select(0);
