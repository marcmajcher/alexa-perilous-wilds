'use strict';

/* eslint-env node */

const data = require('../data/names');
const g = require('./util');

const TYPES = ['male', 'female', 'steading', 'mount'];

exports.generate = (type, language) => {
  if (!language || !(language in data)) {
    language = g.random(Object.keys(data));
  }
  if (!type || !(type in data[language])) {
    type = g.random(TYPES);
  }
  return g.random(data[language][type]);
};
