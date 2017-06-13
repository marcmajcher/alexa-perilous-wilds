'use strict';

/* eslint-env node */

const earthbound = [
  'termite/tick/louse',
  'snail/slug/worm',
  'ant/centipede/scorpion',
  'snake/lizard',
  'vole/rat/weasel',
  'boar/pig',
  'dog/fox/wolf',
  'cat/lion/panther',
  'deer/horse/camel',
  'ox/rhino',
  'bear/ape/gorilla',
  'mammoth/dinosaur',
];

const airborne = [
  'mosquito/firefly',
  'locust/dragonfly/moth',
  'bee/wasp',
  'chicken/duck/goose',
  'songbird/parrot',
  'waterfowl/gull',
  'heron/crane/stork',
  'crow/raven',
  'hawk/falcon',
  'eagle/owl',
  'consor',
  'pteranodon',
];

const watergoing = [
  'insect',
  'jelly/anemone',
  'clam/oyster/snail',
  'eel/snake',
  'frog/toad',
  'fish',
  'crab/lobster',
  'turtle',
  'alligator/crocodile',
  'dolphin/shark',
  'squid/octopus',
  'whale'
];

const common = [
  'halfling+Small',
  'halfling+Small',
  'halfling+Small',
  'goblin/kobold+Small',
  'goblin/kobold+Small',
  'dwarf/gnome+Small',
  'dwarf/gnome+Small',
  'orc/hobgoblin/gnoll',
  'orc/hobgoblin/gnoll',
  'half-elf',
  'half-orc',
  'elf'
];

const uncommon = [
  'fey+Tiny',
  'catfolk',
  'dogfolk',
  'lizardfolk/merfolk',
  'lizardfolk/merfolk',
  'lizardfolk/merfolk',
  'birdfolk',
  'ogre/troll+Large',
  'ogre/troll+Large',
  'ogre/troll+Large',
  'cyclops+Large',
  'giant+Large',
];

const hybrid = [
  'centaur',
  'centaur',
  'werewolf/werebear',
  'werewolf/werebear',
  'werewolf/werebear',
  'were_creatures.beast_',
  '_creatures.beast_ man',
  '_creatures.beast_ man',
  '_creatures.beast_ man',
  '_creatures.beast_ man',
  '_creatures.beast_ _creatures.beast_ man',
  '_creatures.beast_ _creatures.beast_ man',
];

const unusual = [
  'plant/fungus',
  'plant/fungus',
  'plant/fungus',
  'undead _creatures.human_',
  'undead _creatures.human_',
  'undead _creatures.humanoid_',
  '_creatures.beast_ _creatures.beast_',
  '_creatures.beast_ _creatures.beast_',
  '_creatures.beast_ _creatures.ability_',
  '_creatures.beast_ _creatures.ability_',
  '_creatures.beast_ _creatures.feature_',
  '_creatures.beast_ _creatures.feature_',
];

const rare = [
  'slime/ooze+Amorphous',
  'creation+Construct',
  '_creatures.beast_ _creatures.oddity_',
  '_creatures.unnatural_ _creatures.entity_',
];

const legendary = [
  'dragon/colossus+Huge',
  'dragon/colossus+Huge',
  'dragon/colossus+Huge',
  '_creatures.unusual_+Huge',
  '_creatures.unusual_+Huge',
  '_creatures.unusual_+Huge',
  '_creatures.rare_+Huge',
  '_creatures.rare_+Huge',
  '_creatures.rare_+Huge',
  '_creatures.beast_ dragon',
  '_creatures.unusual_ dragon',
  '_creatures.rare_ dragon',
];

const beast = {
  table: [{
    range: 7,
    table: earthbound
  }, {
    range: 10,
    table: airborne
  }, {
    range: 12,
    table: watergoing
  }]
};

const human = ['human'];

const humanoid = {
  table: [{
    range: 7,
    table: common
  }, {
    range: 10,
    table: uncommon
  }, {
    range: 12,
    table: hybrid
  }]
};

const monster = {
  table: [{
    range: 7,
    table: unusual
  }, {
    range: 10,
    table: rare
  }, {
    range: 12,
    table: legendary
  }]
};

const creature = {
  table: [{
      range: 4,
      table: beast,
      tags: ['activity', 'disposition', 'number appearing', 'size']
    },
    {
      range: 6,
      table: human,
      tags: ['activity', 'alignment', 'disposition', 'number appearing'] // +npc tables
    },
    {
      range: 8,
      table: humanoid,
      tags: ['activity', 'alignment', 'disposition', 'number appearing'] // +npc tables
    },
    {
      range: 12,
      table: monster,
      tags: ['activity', 'alignment', 'disposition', 'number appearing', 'size'],
      optionalTags: ['ability', 'adjective', 'age', 'aspect', 'condition', 'feature', 'tags']
    },
  ]
};

module.exports = {
  airborne,
  beast,
  common,
  creature,
  earthbound,
  human,
  humanoid,
  hybrid,
  legendary,
  monster,
  rare,
  uncommon,
  unusual,
  watergoing,
};
