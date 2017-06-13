'use strict';

/* eslint-env node */
/* eslint-disable global-require */

module.exports = {
  creature: require('./generator/creatures'),
  danger: require('./generator/dangers'),
  detail: require('./generator/details'),
  discovery: require('./generator/discoveries'),
  dungeon: require('./generator/dungeons'),
  name: require('./generator/names'),
  npc: require('./generator/npcs'),
  place: require('./generator/places'),
  region: require('./generator/regions'),
  steading: require('./generator/steadings'),
  treasure: require('./generator/treasure'),
};
