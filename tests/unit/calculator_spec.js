var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  //Add 1 to 4 and get 5.

  it('it should be able to add', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  })

  //subtract 4 from 7 and get 3

  it('it should be able to subtract', function(){
    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  //multiply 3 by 5 and get 15

  it('it should be able to multiply', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.multiply(5)
    const actual = calculator.runningTotal;
    assert.equal(actual, 15);
  })

  //divide 21 by 7 and get 3

  it('it should be able to divide', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/')
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  //concatenate multiple number button clicks
  it('it should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 25);
  })

  //chain multiple operations together

  it('it should chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.subtract(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 20);
  })

  //clear the running total without affecting the calculation

  it('it should clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.clearClick();
    calculator.operatorClick('-');
    calculator.subtract(6);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 6);
  })

});
