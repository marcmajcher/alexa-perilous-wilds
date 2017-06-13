'use strict';

/* eslint-env node */
/* eslint-disable global-require */

/* All generator modules export a method named generate(), which returns a
   random entry from the tables. The generate() method must also take an
   optional parameter, indicating the sub-table to return an entry from.
   The generate() method may also take a second parameter, which is an
   object containing options for the generator.
   */

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
