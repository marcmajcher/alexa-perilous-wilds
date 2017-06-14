'use strict';

/* eslint-env node */

const steadings = require('../data/steadings');
const g = require('./util');

const getSteading = (type) => {
  if (!type || !(type in steadings)) {
    type = 'steading';
  }
  let entry = g.random(steadings[type]);
  if (entry.match(/_/)) {
    entry = entry.replace(/_([^_]+)_/g, (str, p1) => getSteading(p1));
  }
  return entry;
};

exports.generate = (type, options) => g.capFirst(getSteading(type, options));
