import {welcome, TYPES} from 'data/game-data';
import view from 'view';

window.onload = () => {
  view(TYPES.WELCOME, welcome);
};
