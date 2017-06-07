'use strict';

/* eslint-env node */

const data = require('./generator-data').region;

const getRandom = list => list[Math.floor(Math.random() * list.length)];
const getName = () => 'Gary';
const getTerrain = () => getRandom(data.terrain);
const getAdjective = () => getRandom(data.adjectives);
const getNoun = (the = false, possessive = false) => {
  // TBD: getName for __NAME__
  const noun = getRandom(data.nouns);
  if (noun === '__NAME__') {
    return getName();
  }
  if (noun.indexOf('_') < 0) {
    return noun;
  }
  return `${the ? 'The ' : ''}${noun.slice(1)}${possessive ? '\'s' : ''}`;
};

const generators = [
  () => `The ${getAdjective()} ${getTerrain()}`,
  () => `The ${getAdjective()} ${getTerrain()}`,
  () => `The ${getAdjective()} ${getTerrain()}`,
  () => `${getTerrain()} of ${getNoun(true)}`,
  () => `${getTerrain()} of ${getNoun(true)}`,
  () => `The ${getTerrain()} ${getAdjective()}`,
  () => `The ${getNoun(false, true)} ${getTerrain()}`,
  () => `The ${getNoun(false, true)} ${getTerrain()}`,
  () => `${getNoun(true)}'s ${getAdjective()} ${getTerrain()}`,
  () => `The ${getAdjective()} ${getTerrain()} of ${getNoun(true)}`
];

exports.generate = () => getRandom(generators)();
