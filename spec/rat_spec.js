var assert = require('chai').assert;
var Rat = require('../rat');
var Food = require('../food');

describe('Rats', function(){
  it('should give type of rat', function(){
    rat1 = new Rat('black')
    assert.equal('black', rat1.type);
  })
  it('should touch food', function(){
    rat1 = new Rat('black');
    food1 = new Food('oats');
    rat1.touchFood(food1);
    assert.equal(true, food1.contaminated)
  })
})