'use strict';

/* eslint-env node */

exports.roll = (dice = '1d6') => {
  // dice formats: d6, 3d8, d10x100, 3d12x10, etc.
  const diceRegex = /^(\d*)d(\d+)x?(\d*)$/;
  let [_, number, dieSize, times] = dice.match(diceRegex);
  number = (number === '' || isNaN(number)) ? 1 : parseInt(number);
  dieSize = (dieSize === '' || isNaN(dieSize)) ? 1 : parseInt(dieSize);
  times = (times === '' || isNaN(times)) ? 1 : parseInt(times);

  let total = 0;
  for (let i = 0; i < number; i++) {
    total += Math.floor(Math.random() * dieSize) + 1;
  }
  return total * times;
}

exports.random = list => list[Math.floor(Math.random() * list.length)];
