'use strict';

/* eslint-env node */

module.exports = {
  dungeon: ['dungeon']
};

const size = {
  // *total common and unique
  // size/themes/areas
  // 1-3 sm. 2/1d4 6/1d6+2
  // 4-9 md. 3/1d6
  // 10-11 lg. 4/1d6+1
  // 12/2d6+4 16/3d6+6 24/4d6+10
  // 12 huge 5/1d6+2
};

const builder = [
  'aliens/precursors',
  'demigod/demon',
  'natural (caves, etc.)',
  'natural (caves, etc.)',
  'religious order/cult',
  'Humanoid (p49)',
  'Humanoid (p49)',
  'dwarves',
  'gnomes',
  'elves',
  'wizard/madman',
  'monarch/warlord',
];

const purpose = [
  'source/portal',
  'mine',
  'tomb/crypt',
  'tomb/crypt',
  'prison',
  'lair/den/hideout',
  'lair/den/hideout',
  'stronghold/sanctuary',
  'stronghold/sanctuary',
  'shrine/temple/oracle',
  'archive/library',
  'unknown/mystery',
];

const ruination = [
  'arcane disaster',
  'damnation/curse',
  'earthquake/fire/flood',
  'earthquake/fire/flood',
  'plague/famine/drought',
  'plague/famine/drought',
  'overrun by monsters',
  'overrun by monsters',
  'war/invasion',
  'war/invasion',
  'depleted resources',
  'better prospects elsewhere',
];

const trap = [
  'alarm',
  'ensnaring/paralyzing',
  'pit',
  'crushing',
  'piercing/puncturing',
  'chopping/slashing',
  'confusing (maze, etc.)',
  'gas (poison, etc.)',
  'Element (p50)',
  'ambush',
  'magical',
  'roll twice'
];

const creature = [
  'waiting in ambush',
  'fighting/squabbling',
  'prowling/on patrol',
  'looking for food',
  'eating/resting',
  'guarding',
  'on the move',
  'searching/scavenging',
  'returning to den',
  'making plans',
  'sleeping',
  'dying',
];

const entity = [
  'alien interloper',
  'vermin lord',
  'criminal mastermind',
  'warlord',
  'high priest',
  'oracle',
  'wizard/witch/alchemist',
  'Monster lord(p49)',
  'evil spirit/evil ghost',
  'undead lord(lich, etc.)',
  'demon',
  'dark god',
];

const danger = {
  table: [{
    range: 4,
    table: trap
  }, {
    range: 11,
    table: creature
  }, {
    range: 12,
    table: entity
  }]
};

const dressing = [
  'junk/debris',
  'tracks/marks',
  'signs of battle',
  'writing/carving',
  'warning',
  'dead CREATURE',
  'bones/remains',
  'book/scroll/map',
  'broken door/broken wall',
  'breeze/wind/smell',
  'lichen/moss/fungus',
  'ODDITY',
];

const feature = [
  'cave-in/collapse',
  'pit/shaft/chasm',
  'pillars/columns',
  'locked door/locked gate',
  'alcoves/niches',
  'bridge/stairs/ramp',
  'fountain/pool/well',
  'puzzle',
  'altar/dais/platform',
  'statue/idol',
  'magic pool/magic statue/magic idol',
  'connection to another dungeon'
];

const find = [
  'trinkets',
  'tools',
  'weapons/armor',
  'supplies/trade goods',
  'coins/gems/jewelry',
  'poisons/potions',
  'adventurer/captive',
  'magic item',
  'scroll/book',
  'magic weapon/magic armor',
  'artifact',
  'ROLL TWICE'
];

const discovery = {
  table: [{
    range: 3,
    table: dressing
  }, {
    range: 9,
    table: feature
  }, {
    range: 12,
    table: find
  }]
};


const mundane = [
  // 1 rot/decay 1 2 torture/agony 2 3 madness 3 4 all is lost 4 5 noble sacrifice
  // 5 6 savage fury 6 7 survival 7 8 criminal activity 8 9 secrets/treachery
  // 9 10 tricks and traps 10 11 invasion/infestation 11 12 factions at war 12

];

const unusual = [
  // creation/invention 1 Element (p50) 2 knowledge/learning 3 growth/expansion
  // 4 deepening mystery 5 transformation/change 6 chaos and destruction
  // 7 shadowy forces 8 forbidden knowledge 9 poison/disease 10 corruption/blight
  // 11 impending disaster 12

];

const extraordinary = [
  // scheming evil divination/scrying blasphemy
  // arcane research occult forces
  // an ancient curse mutation
  // the unquiet dead bottomless hunger incredible power unspeakable horrors holy war

];

const theme = {
  table: [{
    range: 5,
    table: mundane
  }, {
    range: 9,
    table: unusual
  }, {
    range: 12,
    table: extraordinary
  }]
};
