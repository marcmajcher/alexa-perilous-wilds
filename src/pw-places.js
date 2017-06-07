'use strict';

/* eslint-env node */

const data = require('./generator-data').place;

const getRandom = list => list[Math.floor(Math.random() * list.length)];
const getName = () => 'Gary';
const getPlace = () => getRandom(data.places);
const getAdjective = () => getRandom(data.adjectives);
const getNoun = (the = false) => {
  // TBD: getName for __NAME__
  const noun = getRandom(data.nouns);
  if (noun === '__NAME__') {
    return getName();
  }
  if (noun.indexOf('_') < 0) {
    return noun;
  }
  return `${the ? 'The ' : ''}${noun.slice(1)}`;
};

const HALF = 0.5;
const generators = [
  // () => `The ${getPlace()}`,
  () => `The ${getAdjective()} ${getPlace()}`,
  () => `The ${getPlace()} of ${getNoun(true)}`,
  () => `${getNoun(Math.random() < HALF)}'s ${getPlace()}`,
  () => `${getPlace()} of the ${getAdjective()} ${getNoun()}`,
  () => `The ${getAdjective()} ${getNoun()}`
];

exports.generate = () => getRandom(generators)();
