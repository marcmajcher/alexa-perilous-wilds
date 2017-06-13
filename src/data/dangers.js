'use strict';

/* eslint-env node */

const undead = [
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

const planar = [
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

const divine = [
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

const unnatural = [
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

const natural = [
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
  '_details.oddity_ hazard'
];

const trap = [
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

const unnaturalEntity = {
  table: [{
    range: 8,
    table: undead,
    tags: ['ability', 'activity', 'alignment', 'disposition']
  }, {
    range: 11,
    table: planar,
    tags: ['ability', 'activity', 'alignment', 'disposition', 'element', 'feature', 'tag']
  }, {
    range: 12,
    table: divine,
    tags: ['ability', 'activity', 'alignment', 'aspect', 'disposition', 'element', 'feature', 'tag']
  }]
};

const hazard = {
  table: [{
    range: 2,
    table: unnatural,
    tags: ['aspect', 'visibility']
  }, {
    range: 10,
    table: natural
  }, {
    range: 12,
    table: trap,
    tags: ['creature', 'aspect', 'visibility']
  }]
};

const danger = {
  table: [{
    range: 1,
    table: unnaturalEntity
  }, {
    range: 6,
    table: hazard
  }, {
    range: 12,
    name: '_creatures.creature_'
  }]
};

module.exports = {
  danger,
  divine,
  hazard,
  natural,
  planar,
  trap,
  undead,
  unnatural,
  unnaturalEntity,
};
