var Food = require('./food')

var Rat = function(type){
  this.type = type;
}

Rat.prototype = {
  touchFood: function(food){
    food.contaminated = true;
  }
}

module.exports = Rat;