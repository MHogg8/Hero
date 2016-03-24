var assert = require('chai').assert;
var Food = require('../food');

describe('Food', function(){
  it('should return food name', function(){
    var food1 = new Food('beef', 52);
    assert.equal('beef', food1.name)
  });
  it('should return food value', function(){
    var food1 = new Food('beef', 52);
    assert.equal(52, food1.value)
  });

});