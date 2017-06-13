'use strict';

/* eslint-env node */

const details = require('../data/details');
const g = require('./util');

const getDetail = (type) => {
  if (!type || !(type in details)) {
    type = g.random(Object.keys(details));
  }

  let entry = g.random(details[type]);
  if (entry.match(/_ROLLAGAIN_/g)) {
    entry = entry.replace(/_ROLLAGAIN_/, getDetail(type));
  }
  return entry.replace(/_([^_]+)_/g, (str, p1) => getDetail(p1));
};

exports.generate = type => getDetail(type);
