var hero = require('./hero')
var hero = require('./rat')

var Badguy = function(name, weapon){
  this.name = name;
  this.weapon = weapon;
  this.secretPower = 8
}

Badguy.prototype = {
  killBlow: function(hero){
    hero.health = 0;
  },
  smokePipe: function(){
    return "yeah, I love a pipe"
  },
  mindControl: function(hero){
    hero.name = ('Corporal '+ hero.name);
  },
  eatRats: function(rat){
    if(rat.type === 'white'){
      this.secretPower -=2;
    }else{
      this.secretPower+=1;
    }
    delete rat.type;
  }
}

module.exports = Badguy;