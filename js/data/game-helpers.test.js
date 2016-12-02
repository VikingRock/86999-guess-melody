import assert from 'assert';
import {setLives, switchToNext} from './game-helpers';
import {questions} from './game-data';


describe('helpers', function () {
  describe('#setLives()', function () {
    it('should throw an error if lives < 0', function () {
      assert.throws(() => setLives({lives: 3}, -4));
    });
    it('should throw an error if lives > 3', function () {
      assert.throws(() =>setLives({lives: 3}, 4));
    });
  });
  describe('#switchToNext()', function () {
    it('should throw an error if leve < 0', function () {
      assert.throws(() => switchToNext(-5, questions));
    });
    it('should throw an error if leve < 0', function () {
      assert.throws(() => switchToNext(questions.length + 1, questions));
    });
  });
});
