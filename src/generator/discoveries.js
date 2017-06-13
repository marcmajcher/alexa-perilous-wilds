'use strict';

/* eslint-env node */

const discoveries = require('../data/discoveries');
const g = require('./util');

const getDiscovery = (type) => {
  if (!type || !(type in discoveries)) {
    type = 'discovery';
  }
  console.log('table', discoveries[type]);
  let entry = g.random(discoveries[type]);
  if (entry.match(/_ROLLAGAIN_/g)) {
    entry = entry.replace(/_ROLLAGAIN_/, getDiscovery(type));
  }
  return entry.replace(/_([^_]+)_/g, (str, p1) => getDiscovery(p1));
};

exports.generate = (type, options) => getDiscovery(type, options);
