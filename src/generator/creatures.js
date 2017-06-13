'use strict';

/* eslint-env node */

const creatures = require('../data/creatures');
const g = require('./util');

const getCreature = (type) => {
  if (!type || !(type in creatures)) {
    type = 'creature';
  }
  return g.random(creatures[type]);
};

exports.generate = (type, options) => g.capFirst(getCreature(type, options));
