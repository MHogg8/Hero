var assert = require('chai').assert;
var Bad = require('../badGuy');
var Hero = require('../hero');
var Rat = require('../rat');

describe('Bad Guy', function(){
  it('should return badguy name', function(){
    badguy1 = new Bad('KorKophic', 'Spleigelspear')
    assert.equal('KorKophic', badguy1.name)
  });
  it('should return badguy weapon', function(){
    badguy1 = new Bad('KorKophic', 'Spleigelspear')
    assert.equal('Spleigelspear', badguy1.weapon)
  });
  it('should kill hero ', function(){
    badguy1 = new Bad('KorKophic', 'Spleigelspear')
    hero1 = new Hero('Bergerac', 45, 'cauliflower')
    badguy1.killBlow(hero1);
    assert.equal(0, hero1.health);
  });
  it('should smoke pipe ', function(){
    badguy1 = new Bad('KorKophic', 'Spleigelspear')
    assert.equal('yeah, I love a pipe', badguy1.smokePipe())
  });
  it('should take control of herp ', function(){
    badguy1 = new Bad('KorKophic', 'Spleigelspear')
    hero1 = new Hero('Bergerac', 45, 'cauliflower')
    badguy1.mindControl(hero1);
    assert.equal('Corporal Bergerac', hero1.name);
  });
  it('should take control of hero 2 ', function(){
    badguy1 = new Bad('KorKophic', 'Spleigelspear')
    hero1 = new Hero('Spandex', 82, 'cauliflower')
    badguy1.mindControl(hero1);
    assert.equal('Corporal Spandex', hero1.name);
  });
  it('should eat a rat ', function(){
    badguy1 = new Bad('KorKophic', 'Spleigelspear')
    rat1 = new Rat('grey')
    badguy1.eatRats(rat1);
    assert.equal(null, rat1.type);
  });
  it('should eat a rat ', function(){
    badguy1 = new Bad('KorKophic', 'Spleigelspear')
    rat1 = new Rat('grey')
    badguy1.eatRats(rat1);
    assert.equal(9, badguy1.secretPower);
  });
  it('should eat a rat ', function(){
    badguy1 = new Bad('KorKophic', 'Spleigelspear')
    rat1 = new Rat('white')
    badguy1.eatRats(rat1);
    assert.equal(6, badguy1.secretPower);
  });


});