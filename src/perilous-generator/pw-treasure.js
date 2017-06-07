'use strict';

/* eslint-env node */

const data = require('./generator-data').treasure;
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

const HALF = 0.5;
const replacers = {
  UTILITYITEM: () => g.random(data.utilityItems),
  VALUABLE: () => g.random(Math.random() < HALF ? data.artItems : data.gems),
  CLUE: () => g.random(data.clues),
  SIGNOFOFFICE: () => g.random(data.signsOfOffice),
  ARTITEM: () => g.random(data.artItems),
  PORTAL: () => g.random(data.portals),
  ROLLAGAIN: monster => generateTreasure(monster).toLowerCase() // eslint-disable-line no-use-before-define, max-len
};

const replaceTreasure = (treasureType, monster) => replacers[treasureType](monster);

const treasureRoll = (monster) => {
  if (monster) {
    const dice = monster.damageDie.match(/^(\d*)d(\d+)x?(\d*)$/) ?
      monster.damageDie : '1d6';

    let roll = monster.hoarder ? Math.max(g.roll(dice), g.roll(dice)) : g.roll(dice);
    if (monster.lord) {
      roll += g.roll('1d4');
    }
    if (monster.ancient || monster.noteworthy) {
      roll += g.roll('1d4');
    }

    return roll;
  }

  const DOUBLEIT = 6;
  const roll = Math.min(g.roll(), g.roll());
  return (roll === DOUBLEIT) ? g.roll('3d6') : roll;
};

const TREASURE_ROLL_MAX = 18;
const generateTreasure = (monster) => {
  const roll = Math.min(treasureRoll(monster), TREASURE_ROLL_MAX);
  let treasure = data.treasure[roll]
    .replace(/{([^}]+)}/g, (str, p1) => g.roll(p1))
    .replace(/_([A-Z]+)_/g, (str, p1) => replaceTreasure(p1, monster));

  if (monster && monster.farFromHome) {
    const rat = g.roll();
    treasure += ` and ${rat} ration${rat > 1 ? 's' : ''}`;
  }
  return treasure;
};

exports.generate = options => generateTreasure(options);
