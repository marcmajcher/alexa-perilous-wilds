'use strict';

/* eslint-env node */
/* eslint radix:0  */

let random;
const roll = (dice = '1d6') => {
  // dice formats: d6, 3d8, d10x100, 3d12x10, etc.
  // TODO: add dice+...
  const diceRegex = /^(\d*)d(\d+)x?(\d*)$/;
  let [, number, dieSize, times] = dice.match(diceRegex);
  number = isNaN(parseInt(number)) ? 1 : parseInt(number);
  dieSize = isNaN(parseInt(dieSize)) ? 1 : parseInt(dieSize);
  times = isNaN(parseInt(times)) ? 1 : parseInt(times);

  let total = 0;
  for (let i = 0; i < number; i++) {
    total += Math.floor(Math.random() * dieSize) + 1;
  }
  return total * times;
};

const randomFromList = (list) => {
  let entry = list[Math.floor(Math.random() * list.length)];
  if (typeof entry === 'string' && entry.indexOf('/') >= 0) {
    const options = entry.split('/');
    entry = options[Math.floor(Math.random() * options.length)];
  }
  return entry;
};

const randomFromTable = (entry) => {
  if (entry.name) {
    return entry.name;
  }
  else if (entry.table) {
    return random(entry.table);
  }
  return entry;
};

const randomFromObject = (obj) => {
  const size = obj.size || '1d12';
  const dieRoll = roll(size);

  for (let i = 0; i < obj.table.length; i++) {
    if (dieRoll <= obj.table[i].range) {
      return randomFromTable(obj.table[i]);
    }
  }

  return undefined;
};

random = list => (Array.isArray(list) ? randomFromList(list) : randomFromObject(list));

module.exports = {
  random,
  roll
};
