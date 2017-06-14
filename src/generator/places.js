'use strict';

/* eslint-env node */

const places = require('../data/places');
const names = require('./names');
const g = require('./util');

const getName = names.generate;
const getPlace = () => g.random(places.places);
const getAdjective = () => g.random(places.adjective);
const getNoun = (the = false) => {
  const noun = g.random(places.noun);
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
  () => `The ${getAdjective()} ${getPlace()}`,
  () => `The ${getPlace()} of ${getNoun(true)}`,
  () => `${getNoun(Math.random() < HALF)}'s ${getPlace()}`,
  () => `${getPlace()} of the ${getAdjective()} ${getNoun()}`,
  () => `The ${getAdjective()} ${getNoun()}`
];

exports.generate = type => (type in places ? g.random(places[type]) : g.random(generators)());
