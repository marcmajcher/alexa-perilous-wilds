'use strict';

/* eslint-env node */

const dangersUndead = [
  'haunt',
  'haunt',
  'wisp',
  'wisp',
  'ghost/spectre',
  'ghost/spectre',
  'ghost/spectre',
  'ghost/spectre',
  'banshee',
  'wraith',
  'wight',
  'spirit lord/spirit master',
];

const dangersPlanar = [
  'imp+Small',
  'imp+Small',
  'imp+Small',
  'lesser elemental',
  'lesser elemental',
  'lesser elemental',
  'lesser demon/lesser horror',
  'lesser demon/lesser horror',
  'lesser demon/lesser horror',
  'greater elemental',
  'greater demon/greater horror',
  'devil/elemental lord',
];

const dangersDivine = [
  'agent',
  'agent',
  'agent',
  'agent',
  'agent',
  'champion',
  'champion',
  'champion',
  'champion',
  'army+Horde',
  'army+Horde',
  'avatar'
];

const dangersUnnatural = [
  'taint',
  'blight',
  'curse',
  'arcane trap/arcane effect',
  'arcane trap/arcane effect',
  'arcane trap/arcane effect',
  'arcane trap/arcane effect',
  'arcane trap/arcane effect',
  'planar trap/planar effect',
  'planar trap/planar effect',
  'planar trap/planar effect',
  'divine'
];

const dangersNatural = [
  'blinding mist',
  'blinding fog',
  'bog/mire/quicksand',
  'bog/mire/quicksand',
  'pitfall',
  'sinkhole',
  'chasm',
  'poison',
  'disease',
  'flood/fire/tornado',
  'flood/fire/tornado',
  '_oddity_'
];

const dangersTrap = [
  'alarm',
  'alarm',
  'ensnaring/paralyzing',
  'ensnaring/paralyzing',
  'ensnaring/paralyzing',
  'injurious',
  'injurious',
  'injurious',
  'gas/fire/poison',
  'ambush',
  'ambush',
  'ambush',
];

const dangersUnnaturalEntity = {
  table: [{
    range: 8,
    table: dangersUndead,
    tags: ['ability', 'activity', 'alignment', 'disposition']
  }, {
    range: 11,
    table: dangersPlanar,
    tags: ['ability', 'activity', 'alignment', 'disposition', 'element', 'feature', 'tag']
  }, {
    range: 12,
    table: dangersDivine,
    tags: ['ability', 'activity', 'alignment', 'aspect', 'disposition', 'element', 'feature', 'tag']
  }]
};

const dangersHazard = {
  table: [{
    range: 2,
    table: dangersUnnatural,
    tags: ['aspect', 'visibility']
  }, {
    range: 10,
    table: dangersNatural
  }, {
    range: 12,
    table: dangersTrap,
    tags: ['creature', 'aspect', 'visibility']
  }]
};

module.exports = {
  table: [{
    range: 1,
    table: dangersUnnaturalEntity
  }, {
    range: 6,
    table: dangersHazard
  }, {
    range: 12,
    table: exports.creatures
  }]
};
