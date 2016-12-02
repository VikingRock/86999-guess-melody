import assert from 'assert';
import {setLives} from './game-helpers';


describe('helpers', function () {
  describe('#setLives()', function () {
    it('should throw an error if lives < 0', function () {
      assert.throws(() => setLives({lives: 3}, -4));
    });
    it('should throw an error if lives > 3', function () {
      assert.throws(() =>setLives({lives: 3}, 4));
    });
  });
});
