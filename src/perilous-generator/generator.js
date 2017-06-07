'use strict';

/* eslint-env node */

const place = require('./pw-places');
const region = require('./pw-regions');

module.exports = {
  place,
  region,
  location: place
};
