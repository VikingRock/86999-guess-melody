import {TYPES} from 'data/game-data';
import createArtist from 'views/artist-view';
import createGenre from 'views/genre-view';
import createWelcome from 'views/welcome-view';
import createResult from 'views/result-view';

const RENDERS = {
  [TYPES.ARTIST]: createArtist,
  [TYPES.GENRE]: createGenre,
  [TYPES.WELCOME]: createWelcome,
  [TYPES.RESULT]: createResult
};

export default (type, inputData) => {
  RENDERS[type](inputData).renderView();
};
