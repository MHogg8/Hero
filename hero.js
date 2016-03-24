var Food = require('./food');

var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.food = food;
}

Hero.prototype = {
  sayName: function(){
    return(this.name);
  },
  addFood: function(food){ 
    if(food.contaminated === true){
      this.health - food.value
    }else{
    if(food.name === this.food){
      this.health += food.value * 1.5
    }else{
      this.health += food.value;
    }
  }
    if(this.health > 100) this.health = 100;
  }
}

module.exports = Hero;