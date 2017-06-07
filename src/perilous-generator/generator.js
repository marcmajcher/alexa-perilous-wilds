'use strict';

/* eslint-env node */

const place = require('./pw-places');
const region = require('./pw-regions');
const treasure = require('./pw-treasure');

module.exports = {
  place,
  region,
  treasure,
  location: place
};
