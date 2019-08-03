const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  //Do the number buttons update the display of the running total?
  it('it should update the display of the running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('15')
  })

  //Do the arithmetical operations update the display with the result of the operation?
 it('it should update the display with the result of the operation', function(){
   running_total = element(by.css('#running_total'));
   element(by.css('#number2')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number4')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('6');

 })
 //Can multiple operations be chained together?
  it('it should chain multiple operations together', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click()
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  //Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?

    it('it should provide output for negative numbers', function(){
      element(by.css('#number4')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number8')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-4')
    })

    it('it should provide output for decimal numbers', function(){
      element(by.css('#number1')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('3.75')
    })

    it('it should provide output for very large numbers', function(){
      element(by.css('#number5')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number2')).click();
      element(by.css('#number5')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('7500000')
  })

// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.

it('it should return infinity in exceptional circumstances', function(){
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
})




});
