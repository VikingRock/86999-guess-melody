import * as dom from 'dom-helpers';
import makeElement from 'template-welcome';
import {welcome} from 'data/game-data';


window.onload = () => {
  dom.renderElement(makeElement(welcome));
};
