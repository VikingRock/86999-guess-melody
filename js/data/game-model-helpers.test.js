import assert from 'assert';
import {setLives, setTime, setCurrentQuestion} from './game-model-helpers';


describe('model-methods', function () {

  describe('#setLives()', function () {
    it('Should throw an error if lives < 0', function () {
      assert.throws(() => setLives({lives: 3}, -4));
    });
    it('Should throw an error if lives > 3', function () {
      assert.throws(() => setLives({lives: 3}, 4));
    });
    it('Number of Lives successfully changed', function () {
      assert.equal(setLives({lives: 3}, 2).lives, 2);
    });
  });

  describe('#setTime()', function () {
    it('Should throw an error if time < 0', function () {
      assert.throws(() => setTime({timer: 0}, -120));
    });
    it('Timer successfully changed', function () {
      assert.equal(setTime({timer: 3}, 25).timer, 25);
    });
  });

  describe('#setCurrentQuestion()', function () {
    it('Should throw an error if currentQuestion < 0', function () {
      assert.throws(() => setCurrentQuestion({currentQuestion: 6}, -1));
    });
    it('Should throw an error if currentQuestion > 10', function () {
      assert.throws(() => setCurrentQuestion({currentQuestion: 6}, 11));
    });
    it('currentQuestion successfully changed', function () {
      assert.equal(setCurrentQuestion({currentQuestion: 3}, 9).currentQuestion, 9);
    });
  });

});
