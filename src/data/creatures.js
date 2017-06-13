'use strict';

/* eslint-env node */

const creaturesEarthbound = [
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

const creaturesAirborne = [
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

const creaturesWaterGoing = [
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

const creaturesCommon = [
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

const creaturesUncommon = [
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

const creaturesHybrid = [
  'centaur',
  'centaur',
  'werewolf/werebear',
  'werewolf/werebear',
  'werewolf/werebear',
  'were_beast_',
  '_human_ + _beast_',
  '_human_ + _beast_',
  '_human_ + _beast_',
  '_human_ + _beast_',
  '_human_ + _beast_ + _beast_',
  '_human_ + _beast_ + _beast_',
];

const creaturesUnusual = [
  'plant/fungus',
  'plant/fungus',
  'plant/fungus',
  'undead _human_',
  'undead _human_',
  'undead _humanoid_',
  '_beast_ + _beast_',
  '_beast_ + _beast_',
  '_beast_ + _ability_',
  '_beast_ + _ability_',
  '_beast_ + _feature_',
  '_beast_ + _feature_',
];

const creaturesRare = [
  'slime/ooze+Amorphous',
  'creation+Construct',
  '_beast_ + _oddity_',
  '_unnatural_ _entity_',
];

const creaturesLegendary = [
  'dragon/colossus+Huge',
  'dragon/colossus+Huge',
  'dragon/colossus+Huge',
  '_unusual_ + Huge',
  '_unusual_ + Huge',
  '_unusual_ + Huge',
  '_rare_ + Huge',
  '_rare_ + Huge',
  '_rare_ + Huge',
  '_beast_ dragon',
  '_unusual_ dragon',
  '_rare_ dragon',
];

const creaturesBeast = {
  table: [{
    range: 7,
    table: creaturesEarthbound
  }, {
    range: 10,
    table: creaturesAirborne
  }, {
    range: 12,
    table: creaturesWaterGoing
  }]
};

const creaturesHuman = ['human'];

const creaturesHumanoid = {
  table: [{
    range: 7,
    table: creaturesCommon
  }, {
    range: 10,
    table: creaturesUncommon
  }, {
    range: 12,
    table: creaturesHybrid
  }]
};

const creaturesMonster = {
  table: [{
    range: 7,
    table: creaturesUnusual
  }, {
    range: 10,
    table: creaturesRare
  }, {
    range: 12,
    table: creaturesLegendary
  }]
};

module.exports = {
  table: [{
      range: 4,
      table: creaturesBeast,
      tags: ['activity', 'disposition', 'number appearing', 'size']
    },
    {
      range: 6,
      table: creaturesHuman,
      tags: ['activity', 'alignment', 'disposition', 'number appearing'] // npc tables
    },
    {
      range: 8,
      table: creaturesHumanoid,
      tags: ['activity', 'alignment', 'disposition', 'number appearing'] // npc tables
    },
    {
      range: 12,
      table: creaturesMonster,
      tags: ['activity', 'alignment', 'disposition', 'number appearing', 'size'],
      optionalTags: ['ability', 'adjective', 'age', 'aspect', 'condition', 'feature', 'tags']
    },
  ]
};
