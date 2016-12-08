import {welcome} from 'data/game-data';
import createWelcome from 'views/welcome-view';

window.onload = () => {
  createWelcome(welcome).renderView();
};
