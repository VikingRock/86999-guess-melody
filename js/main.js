import {welcome} from 'data/game-data';
import CreateWelcome from 'views/welcome-view';

window.onload = () => {
  CreateWelcome(welcome).renderView();
};
