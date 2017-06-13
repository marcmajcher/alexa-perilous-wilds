'use strict';

/* eslint-env node */

const data = require('../data/treasure');
const g = require('./util');

/*
  Monster: {
    damage die: use one,
    hoarder: damage die (use best of two),
    far from home: add 1d6 rations,
    lord over others: +1d4 to roll,
    ancient/noteworthy: +1d4 to roll
  }
*/

let generateTreasure;
const HALF = 0.5;
const replacers = {
  ROLLAGAIN: (type, monster) => generateTreasure(type, monster),
  VALUABLE: () => g.random(Math.random() < HALF ? data.artItem : data.gem),
};

const replaceTreasure = (treasureType, type, monster) => replacers[treasureType](type, monster);

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

  const DOUBLEIT = 6;
  const roll = Math.min(g.roll(), g.roll());
  return (roll === DOUBLEIT) ? g.roll('3d6') : roll;
};

const TREASURE_ROLL_MAX = 18;
generateTreasure = (type = 'treasure', monster = {}) => {
  let treasure;
  if (type === 'treasure') {
    const roll = Math.min(treasureRoll(monster), TREASURE_ROLL_MAX);
    treasure = g.fillTemplate(data[type][roll]);
  }
  else {
    treasure = g.random(data[type]);
  }

  treasure = treasure.replace(/{([^}]+)}/g, (str, p1) => g.roll(p1))
    .replace(/_([A-Z]+)_/g, (str, p1) => replaceTreasure(p1, monster));

  if (monster.farFromHome) {
    const rat = g.roll();
    treasure += ` and ${rat} ration${rat > 1 ? 's' : ''}`;
  }
  return treasure;
};

exports.generate = options => generateTreasure(options);
