import * as dom from 'dom-helpers';
import welcomeElement from 'template-welcome';

window.onload = () => {
  dom.renderElement(welcomeElement);
};
