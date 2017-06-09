'use strict';

/* eslint-env node */

const place = require('./pw-places');
const region = require('./pw-regions');
const treasure = require('./pw-treasure');
const names = require('./pw-names');
const detail = require('./pw-details');

module.exports = {
  place,
  region,
  treasure,
  name: names,
  detail,
  location: place
};
