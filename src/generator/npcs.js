'use strict';

/* eslint-env node */

const npcs = require('../data/npcs');
const g = require('./util');

const getNPC = (type) => {
  if (!type || !(type in npcs) || type === 'npc') {
    type = 'context';
  }
  return g.fillTemplate(`_AAN_ ${g.random(npcs[type])}`);
};

exports.generate = (type, options) => g.capFirst(getNPC(type, options));
