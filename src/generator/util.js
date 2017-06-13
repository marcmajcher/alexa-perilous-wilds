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

const getAan = (str) => {
  const words = str.split(/\s+/);
  const keyword = words[words.indexOf('_AAN_') + 1];
  return keyword[0].match(/[aeiou]/i) ? 'an' : 'a';
};

const fillTemplate = (template, result = '') => {
  let output = template.replace(/_RESULT_/g, result);
  output = output.replace(/_(\w+)\.(\w+)_/g, (str, p1, p2) =>
    require(`./${p1}`).generate(p2)); // eslint-disable-line global-require
  output = output.replace(/_AAN_/g, getAan(output));
  return output;
};

const randomFromList = (list) => {
  let entry = list[Math.floor(Math.random() * list.length)];
  if (typeof entry === 'string' && entry.indexOf('/') >= 0) {
    const options = entry.split('/');
    entry = options[Math.floor(Math.random() * options.length)];
  }
  return entry.match(/_/) ? fillTemplate(entry) : entry;
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

  let thing = 'nothing';
  for (let i = 0; i < obj.table.length; i++) {
    if (dieRoll <= obj.table[i].range) {
      thing = randomFromTable(obj.table[i]);
    }
  }

  return obj.template ? fillTemplate(obj.template, thing) : thing;
};

random = list => (Array.isArray(list) ? randomFromList(list) : randomFromObject(list));

module.exports = {
  fillTemplate,
  random,
  roll,
};
