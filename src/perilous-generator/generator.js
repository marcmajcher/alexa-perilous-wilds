'use strict';

/* eslint-env node */

const place = require('./pw-places');
const region = require('./pw-regions');
const treasure = require('./pw-treasure');
const name = require('./pw-names');

module.exports = {
  place,
  region,
  treasure,
  name,
  location: place
};
