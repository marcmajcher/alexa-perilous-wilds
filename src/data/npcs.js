'use strict';

/* eslint-env node */

const criminal = [
  'bandit/brigand/thug',
  'bandit/brigand/thug',
  'thief',
  'thief',
  'bodyguard/tough',
  'bodyguard/tough',
  'burglar',
  'burglar',
  'dealer/fence',
  'racketeer',
  'lieutenant',
  'boss',
];

const commoner = [
  'housewife/househusband',
  'hunter/gatherer',
  'hunter/gatherer',
  'farmer/herder',
  'farmer/herder',
  'farmer/herder',
  'laborer/servant',
  'laborer/servant',
  'driver/porter/guide',
  'sailor/soldier/guard',
  'clergyman/monk',
  'apprentice/adventurer',
];

const tradesperson = [
  'cobbler/furrier/tailor',
  'weaver/basketmaker',
  'potter/carpenter',
  'mason/baker/chandler',
  'cooper/wheelwright',
  'tanner/ropemaker',
  'smith/tinker',
  'stablekeeper/herbalist',
  'vintner/jeweler',
  'inkeeper/tavernkeeper',
  'artist/actor/minstrel',
  'armorer/weaponsmith',
];

const merchant = [
  'general goods merchant/outfitter',
  'general goods merchant/outfitter',
  'general goods merchant/outfitter',
  'raw materials merchant',
  'grain merchant/livestock merchant',
  'ale merchant/wine merchant/spirits merchant',
  'clothing merchant/jewelry merchant',
  'weapons merchant/armor merchant',
  'spice merchant/tobacco merchant',
  'labor merchant/slave merchant',
  'book merchant/scroll merchant',
  'magic supplies merchant/magic items merchant',
];

const specialist = [
  'undertaker',
  'sage/scholar/wizard',
  'writer/illuminator',
  'perfumer',
  'architect/engineer',
  'locksmith/clockmaker',
  'physician/apothecary',
  'navigator/guide',
  'alchemist/astrologer',
  'spy/diplomat',
  'cartographer',
  'inventor',
];

const official = [
  'town crier',
  'tax collector',
  'armiger/gentry',
  'armiger/gentry',
  'reeve/sheriff/constable',
  'mayor/magistrate',
  'priest/bishop/abbot',
  'guildmaster',
  'knight/templar',
  'elder/high priest',
  'noble/baron/duke/earl',
  'lord/lady/king/queen',
];

const wilderness = {
  table: [{
      range: 2,
      table: criminal // -4
    }, {
      range: 4,
      name: 'adventurer/explorer'
    },
    {
      range: 6,
      name: 'hunter/gatherer'
    }, {
      range: 8,
      table: commoner
    }, {
      range: 10,
      name: 'ranger/scout'
    },
    {
      range: 11,
      name: 'soldier/mercenary'
    }, {
      range: 12,
      table: official
    }
  ]
  // activity, alignment, npc trait
};

const rural = {
  table: [{
      range: 1,
      name: 'beggar/urchin'
    },
    {
      range: 2,
      table: criminal
    }, // -1
    {
      range: 3,
      name: 'adventurer/explorer'
    },
    {
      range: 4,
      name: 'hunter/gatherer'
    },
    {
      range: 8,
      table: commoner
    },
    {
      range: 9,
      table: tradesperson
    },
    {
      range: 10,
      table: merchant
    }, // -1
    {
      range: 11,
      name: 'militia/soldier/guard'
    },
    {
      range: 12,
      table: official
    },
  ]
  // activity, alignment, npc trait
};

const urban = {
  table: [{
      range: 2,
      name: 'beggar/urchin'
    },
    {
      range: 3,
      table: criminal
    },
    {
      range: 7,
      table: commoner
    },
    {
      range: 8,
      table: tradesperson
    },
    {
      range: 9,
      table: merchant
    },
    {
      range: 10,
      table: specialist
    },
    {
      range: 11,
      name: 'militia/soldier/guard'
    },
    {
      range: 12,
      table: official
    },
  ]
  // activity, alignment, npc trait
};

const occupation = {
  table: [{
      range: 1,
      table: criminal
    },
    {
      range: 6,
      table: commoner
    },
    {
      range: 8,
      table: tradesperson
    },
    {
      range: 10,
      table: merchant
    },
    {
      range: 11,
      table: specialist
    },
    {
      range: 12,
      table: official
    },
  ]
};

const physicalAppearance = {
  table: [
    'disfigured (missing teeth, eye, etc.)',
    'lasting injury (bad leg, arm, etc.)',
    'tattooed/pockmarked/scarred',
    'unkempt/shabby/grubby',
    'big/thick/brawny',
    'small/scrawny/emaciated',
    'notable hair (wild, long, none, etc.)',
    'notable nose (big, hooked, etc.)',
    'notable eyes (blue, bloodshot, etc.)',
    'clean/well-dressed/well-groomed',
    'attractive/handsome/stunning',
    'they are [roll again] despite [a contradictory detail of your choice]',
  ]
};

const personality = {
  table: [
    'loner/alienated/antisocial',
    'cruel/belligerent/bully',
    'anxious/fearful/cowardly',
    'envious/covetous/greedy',
    'aloof/haughty/arrogant',
    'awkward/shy/self-loathing',
    'orderly/compulsive/controlling',
    'confident/impulsive/reckless',
    'kind/generous/compassionate',
    'easygoing/relaxed/peaceful',
    'cheerful/happy/optimistic',
    'they are [roll again] despite [a contra-dictory detail of your choice]',
  ]
};

const quirk = {
  table: [
    'insecure/racist/xenophobic',
    'addict (sweets, drugs, sex, etc.)',
    'phobia (spiders, fire, darkness, etc.)',
    'allergic/asthmatic/chronically ill',
    'skeptic/paranoid',
    'superstitious/devout/fanatical',
    'miser/pack-rat',
    'spendthrift/wastrel',
    'smart aleck/know-it-all',
    'artistic/dreamer/delusional',
    'naive/idealistic',
    'they are [roll again] despite [a contra-dictory detail of your choice]',
  ]
};

const trait = {
  table: [{
      range: 6,
      table: physicalAppearance
    },
    {
      range: 9,
      table: personality
    },
    {
      range: 12,
      table: quirk
    },
  ]
};

const follower = {
  table: []
};

const competence = {
  table: [{
      range: 3,
      name: 'A liability: Quality -1, +0 tags'
    },
    {
      range: 9,
      name: 'Competent: Quality +0, +1 tags'
    },
    {
      range: 11,
      name: 'Fully capable: Quality +1, +2 tags'
    },
    {
      range: 12,
      name: 'Exceptional: Quality +2, +4 tags'
    },
  ]
};

const background = [
  'Life of servitude: +Meek',
  'Life of oppression: +Meek',
  'Past their prime: -1 to Quality, +1 Wise 4-5 Has lived a life of danger: +2 tags',
  'Unremarkable',
  'Unremarkable',
  'Unremarkable',
  'Unremarkable',
  'Has lived a life of privilege: +1 tag',
  'Specialist: +1 to Quality, -2 tags',
  'Roll twice on this table',
];

const loyalty = {
  table: [{
      range: 2,
      name: '0 (little faith in leader’s cause)'
    },
    {
      range: 10,
      name: '+1'
    },
    {
      range: 12,
      name: '+2 (great faith in leader’s cause)'
    },
  ]
};

const instinct = [
  'loot, pillage, and burn',
  'hold a grudge and seek payback',
  'question leadership or authority',
  'lord over others',
  'lord over others',
  'act impulsively',
  'act impulsively',
  'give in to temptation',
  'give in to temptation',
  'slack off',
  'slack off',
  'avoid danger or punishment',
];

const cost = [
  'debauchery',
  'vengeance',
  'lucre',
  'lucre',
  'lucre',
  'renown',
  'renown',
  'glory',
  'glory',
  'affection',
  'knowledge',
  'good',
];

const context = {
  table: [{
      range: 3,
      table: wilderness
    },
    {
      range: 9,
      table: rural
    },
    {
      range: 12,
      table: urban
    },
  ]
};

const hitPoints = [3, 6, 6, 9]; // eslint-disable-line no-magic-numbers

const damageDie = ['d4', 'd6', 'd6', 'd8'];

module.exports = {
  background,
  commoner,
  competence,
  context,
  cost,
  criminal,
  damageDie,
  follower,
  hitPoints,
  instinct,
  loyalty,
  merchant,
  occupation,
  official,
  personality,
  physicalAppearance,
  quirk,
  rural,
  specialist,
  tradesperson,
  trait,
  urban,
  wilderness,
};
