'use strict';

/* eslint-env node */

const data = require('../data/details');
const g = require('./util');

const getDetail = (type) => {
  if (!type || !(type in data)) {
    type = g.random(Object.keys(data));
  }

  let entry = g.random(data[type]);
  if (entry.match(/_ROLLAGAIN_/g)) {
    entry = entry.replace(/_ROLLAGAIN_/, getDetail(type)); // stack bust on replace WTF?
  }
  return entry.replace(/_([^_]+)_/g, (str, p1) => getDetail(p1));
};

exports.generate = type => getDetail(type);
