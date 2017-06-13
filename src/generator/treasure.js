'use strict';

/* eslint-env node */

const data = require('../data/treasure');
const g = require('./util');

/*
  Monster options: {
    damageDie: use one,
    hoarder: damage die (use best of two),
    farFromHome: add 1d6 rations,
    lord/ancient/noteworthy: +1d4 to roll
  }
*/

let generateTreasure;
const HALF = 0.5;
const macros = {
  ROLLAGAIN: options => generateTreasure(options.type, options),
  VALUABLE: () => g.random(Math.random() < HALF ? data.artItem : data.gem),
};

const additionalRolls = (monster) => {
  let add = 0;
  add += monster.lord ? g.roll('1d4') : 0;
  add += (monster.ancient || monster.noteworthy) ? g.roll('1d4') : 0;
  return add;
};

const treasureRoll = (monster) => {
  if (monster.damageDie) {
    const dice = monster.damageDie.match(/^(\d*)d(\d+)x?(\d*)$/) ?
      monster.damageDie : '1d6';
    let roll = monster.hoarder ? Math.max(g.roll(dice), g.roll(dice)) : g.roll(dice);
    roll += additionalRolls(monster);
    return roll;
  }

  const roll = Math.min(g.roll(), g.roll());
  return (roll === 6) ? g.roll('3d6') : roll; // eslint-disable-line no-magic-numbers
};

const TREASURE_ROLL_MAX = 18;
generateTreasure = (type = 'treasure', options = {}) => {
  options.type = type;
  let treasure;
  if (type === 'treasure') {
    const roll = Math.min(treasureRoll(options), TREASURE_ROLL_MAX);
    treasure = g.fillTemplate(data[type][roll]);
  }
  else {
    treasure = g.random(data[type]);
  }

  if (options.farFromHome) {
    const rat = g.roll();
    treasure += ` and ${rat} ration${rat > 1 ? 's' : ''}`;
  }

  return g.replaceMacros(treasure, macros, options);
};

exports.generate = (type, options) => g.capFirst(generateTreasure(type, options));
