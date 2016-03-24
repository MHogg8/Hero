var assert = require('chai').assert;
var Hero = require('../hero');
var Food = require('../food');


describe('Hero', function(){
  it('should create a new hero', function(){
    var hero1 = new Hero('Matthew', 80, 'Almonds')
    assert.equal('Matthew', hero1.name)
  });
  it('should say name', function(){
    var hero1 = new Hero('Matthew', 80, 'Almonds')
    assert.equal('Matthew', hero1.sayName());
  });
  it('should increase health', function(){
    var hero1 = new Hero('Matthew', 2, 'Almonds');
    var food1 = new Food('Chicken', 34);
    var food2 = new Food('tuna', 42);
    hero1.addFood(food1);
    hero1.addFood(food2);
    assert.equal(78, hero1.health);
  });
  it('should increase health favorite food', function(){
    var hero1 = new Hero('Matthew', 2, 'Almonds');
    var food1 = new Food('Chicken', 20);
    var food2 = new Food('Almonds', 60);
    hero1.addFood(food1);
    hero1.addFood(food2);
    assert.equal(100, hero1.health);
  });
})