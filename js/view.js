import * as dom from 'dom-helpers';
import {TYPES} from 'data/game-data';
import welcome from 'template-welcome';
import artist from 'template-artist';
import genre from 'template-genre';
import result from 'template-result';

const RENDERS = {
  [TYPES.WELCOME]: welcome,
  [TYPES.ARTIST]: artist,
  [TYPES.GENRE]: genre,
  [TYPES.RESULT]: result
};

export default (type, inputData) => {
  dom.renderElement(RENDERS[type](inputData));
};
