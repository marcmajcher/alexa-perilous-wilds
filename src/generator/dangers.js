'use strict';

/* eslint-env node */

const dangers = require('../data/dangers');
const g = require('./util');

const getDanger = (type) => {
  if (!type || !(type in dangers)) {
    type = 'danger';
  }
  return g.random(dangers[type]);
};

exports.generate = (type, options) => g.capFirst(getDanger(type, options));
