'use strict';

/* eslint-env node */
/* eslint radix:0  */

exports.roll = (dice = '1d6') => {
  // dice formats: d6, 3d8, d10x100, 3d12x10, etc.
  const diceRegex = /^(\d*)d(\d+)x?(\d*)$/;
  let [_, number, dieSize, times] = dice.match(diceRegex); // eslint-disable-line
  number = isNaN(parseInt(number)) ? 1 : parseInt(number);
  dieSize = isNaN(parseInt(dieSize)) ? 1 : parseInt(dieSize);
  times = isNaN(parseInt(times)) ? 1 : parseInt(times);

  let total = 0;
  for (let i = 0; i < number; i++) {
    total += Math.floor(Math.random() * dieSize) + 1;
  }
  return total * times;
};

exports.random = (list) => {
  let entry = list[Math.floor(Math.random() * list.length)];
  if (typeof entry === 'string' && entry.indexOf('/') >= 0) {
    const options = entry.split('/');
    entry = options[Math.floor(Math.random() * options.length)];
  }
  return entry;
};
