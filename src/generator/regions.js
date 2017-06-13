'use strict';

/* eslint-env node */

const data = require('../data/regions');
const names = require('./names');
const g = require('./util');

const getName = names.generate;
const getTerrain = () => g.random(data.terrain);
const getAdjective = () => g.random(data.adjectives);
const getNoun = (the = false, possessive = false) => {
  const noun = g.random(data.nouns);
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

exports.generate = () => g.random(generators)();
