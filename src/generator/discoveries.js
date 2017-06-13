'use strict';

/* eslint-env node */

const discoveries = require('../data/discoveries');
const g = require('./util');

const getDiscovery = (type) => {
  if (!type || !(type in discoveries)) {
    type = 'discovery';
  }
  let entry = g.random(discoveries[type]);
  if (entry.match(/_/)) {
    entry = entry.replace(/_([^_]+)_/g, (str, p1) => getDiscovery(p1));
  }
  return entry;
};

exports.generate = (type, options) => g.capFirst(getDiscovery(type, options));
