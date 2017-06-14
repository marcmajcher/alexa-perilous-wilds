'use strict';

/* eslint-env node */

const dungeons = require('../data/dungeons');
const g = require('./util');

exports.generate = (type = 'dungeon') => g.capFirst(g.random(dungeons[type]));
