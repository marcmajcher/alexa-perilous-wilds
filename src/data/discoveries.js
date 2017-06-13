'use strict';

/* eslint-env node */

const arcane = {
  table: [{
    range: 2,
    name: 'resdiue'
  }, {
    range: 5,
    name: 'blight'
  }, {
    range: 7,
    name: 'alteration/mutation'
  }, {
    range: 10,
    name: 'enchantment'
  }, {
    range: 12,
    name: 'source/repository'
  }],
  template: '_AAN_ _alignment_ _magicType_ _RESULT_'
};

const planar = {
  table: [{
      range: 4,
      name: 'distortion/warp'
    }, {
      range: 8,
      name: 'portal/gate'
    },
    {
      range: 10,
      name: 'rift/tear'
    }, {
      range: 12,
      name: 'outpost'
    }
  ],
  template: '_AAN_ _RESULT_ of _alignment_ _element_'
};

const divine = {
  table: [{
    range: 3,
    name: 'mark/sign',
  }, {
    range: 6,
    name: 'cursed place'
  }, {
    range: 9,
    name: 'hallowed place'
  }, {
    range: 11,
    name: 'watched place'
  }, {
    range: 12,
    name: 'presence'
  }],
  template: '_AAN_ _RESULT_ of _alignment_ _aspect_'
};


const ruin = {
  table: [{
      range: 2,
      name: 'Infrastructure(1 d6 + 6)'
    },
    {
      range: 4,
      name: 'Dwelling(1 d8 + 4)'
    },
    {
      range: 6,
      name: 'Burial/Religious(1 d8 + 4)'
    },
    {
      range: 8,
      name: 'Steading(1 d10 + 2)'
    },
    {
      range: 12,
      name: 'Dungeon(pp60 - 61)'
    },
    // Creature responsible(1 d4 + 4), Age(1 d8 + 4), Ruination, Visibility
  ],
  tags: ['creature(1d4+4)', 'age(1d8+4)', 'ruination', 'visibility'],
  template: '_AAN_ _creature_\'s _age_ _RESULT_, _visibility_, ruined by _ruination_'
};

const lair = {
  table: [{
    range: 3,
    name: 'burrow'
  }, {
    range: 5,
    name: 'cave'
  }, {
    range: 7,
    name: 'tunnels'
  }, {
    range: 9,
    name: 'nest/aerie'
  }, {
    range: 10,
    name: 'hive'
  }, {
    range: 12,
    table: ruin
  }],
  template: '_AAN_ _creature_ _RESULT_, _visibility_'
};

const obstacle = [
  'difficult ground', 'difficult ground', 'difficult ground',
  'difficult ground', 'difficult ground', 'cliff', 'crevasse', 'chasm',
  'ravine', 'gorge', '_oddity_'
];

const terrainChange = [
  'limited area of another _TERRAINTYPE_',
  'limited area of another _TERRAINTYPE_',
  'limited area of another _TERRAINTYPE_',
  'limited area of another _TERRAINTYPE_',
  'crevice/hole/pit/cave', 'crevice/hole/pit/cave',
  'altitude change', 'altitude change',
  'canyon', 'valley', 'rise in distance', 'peak in distance'
];

const waterFeature = [
  'spring/hot spring',
  'waterfall/geyser',
  'creek/stream/brook',
  'creek/stream/brook',
  'creek/stream/brook',
  'creek/stream/brook',
  'pond', 'lake',
  'river', 'river',
  'sea', 'ocean',
];

const landmark = [
  'landmark _waterfeature_',
  'ancient tree',
  'giant flowers',
  'grove',
  'peak/rock formation/crater',
  'peak/rock formation/crater',
  'peak/rock formation/crater',
  'peak/rock formation/crater',
  '_oddity_', '_oddity_',
];

const resource = {
  table: [
    'game/fruits/vegetables',
    'game/fruits/vegetables',
    'game/fruits/vegetables',
    'game/fruits/vegetables',
    'herbs/spices/dye source',
    'herbs/spices/dye source',
    'timber/stone',
    'timber/stone',
    'timber/stone',
    'copper ore', 'iron ore',
    'precious metal/precious gems'
  ],
  template: '_size_ _RESULT_ _visibility_'
};

const tracks = {
  table: [{
      range: 3,
      name: 'faint tracks/unclear tracks'
    }, {
      range: 6,
      name: 'definite tracks/clear tracks'
    },
    {
      range: 8,
      name: 'multiple tracks'
    }, {
      range: 10,
      name: 'signs of violence'
    }, {
      range: 12,
      name: 'trail of blood'
    }
  ],
  template: '_RESULT_ from _AAN_ _age_ _creature_'
};

const remains = {
  table: [{
      range: 4,
      name: 'bones'
    }, {
      range: 7,
      name: 'corpse/carcass'
    }, {
      range: 9,
      name: 'site of violence'
    },
    {
      range: 10,
      name: 'junk/refuse'
    },
    {
      range: 11,
      name: 'lost supplies/cargo'
    },
    {
      range: 12,
      name: 'tools/weapons/armor'
    },
  ],
  template: '_age_ _RESULT_ _visibility_'
};

const stash = {
  table: [{
      range: 3,
      name: 'trinkets/coins'
    },
    {
      range: 5,
      name: 'tools/weapons/armor'
    }, {
      range: 7,
      name: 'map'
    },
    {
      range: 9,
      name: 'food/supplies'
    },
    {
      range: 12,
      name: '_treasure_'
    },
  ]
};

const enigmatic = {
  table: [{
      range: 4,
      name: 'earthworks'
    },
    {
      range: 8,
      name: 'megalith'
    },
    {
      range: 11,
      name: 'statue/idol/totem'
    },
    {
      range: 12,
      name: 'Oddity'
    },
  ],
  tags: ['age(1d8+4)', 'size(1d8+4)', 'Visibility'],
  template: '_AAN_ _age_ _size_ _RESULT_, _visibility_'
};

const infrastructure = {
  table: [{
      range: 4,
      name: 'track/path'
    },
    {
      range: 8,
      name: 'road'
    },
    {
      range: 10,
      name: 'bridge/ford'
    },
    {
      range: 11,
      name: 'mine/quarry'
    },
    {
      range: 12,
      name: 'aqueduct/canal/portal'
    },
    //   Creature responsible(1 d4 + 4)
  ],
  tags: ['_creature_(1d4+4)'],
  template: '_AAN_ _creature_\'s _RESULT_'
};

const dwelling = {
  table: [{
      range: 3,
      name: 'campsite'
    },
    {
      range: 6,
      name: 'hovel/hut'
    },
    {
      range: 8,
      name: 'farm'
    },
    {
      range: 10,
      name: 'inn/roadhouse'
    },
    {
      range: 12,
      name: 'tower/keep/estate'
    },
    //   Creature responsible(1 d4 + 4)
  ],
  tags: ['creature(1d4+4)'],
  template: '_AAN_ _creature\'s _RESULT_'
};

const burial = {
  table: [{
      range: 2,
      name: 'grave marker/barrow'
    },
    {
      range: 4,
      name: 'graveyard/necropolis'
    },
    {
      range: 6,
      name: 'tomb/crypt'
    },
    {
      range: 9,
      name: 'shrine'
    },
    {
      range: 11,
      name: 'temple/retreat'
    },
    {
      range: 12,
      name: 'great temple'
    },
    // Creature responsible(1 d4 + 4), Alignment, Aspect
  ],
  tags: ['creature(1d4+4)', 'alignment', 'aspect'],
  template: '_AAN_ _creature_\'s _RESULT_ of _aspect_'
};

const unnaturalFeature = {
  table: [{
      range: 9,
      table: arcane
    },
    {
      range: 11,
      table: planar
    },
    {
      range: 12,
      table: divine
    }
  ]
};

const naturalFeature = {
  table: [{
      range: 2,
      table: lair
    }, {
      range: 4,
      table: obstacle
    }, {
      range: 7,
      table: terrainChange
    },
    {
      range: 9,
      table: waterFeature
    }, {
      range: 11,
      table: landmark
    }, {
      range: 12,
      table: resource
    }
  ]
};

const evidence = {
  table: [{
      range: 6,
      table: tracks
    },
    {
      range: 10,
      table: remains
    },
    {
      range: 12,
      table: stash
    },
  ]
};

const structure = {
  table: [{
      range: 1,
      table: enigmatic
    },
    {
      range: 3,
      table: infrastructure
    },
    {
      range: 4,
      table: dwelling
    },
    {
      range: 6,
      table: burial
    },
    {
      range: 8,
      name: 'steading'
    },
    {
      range: 12,
      table: ruin
    },
  ]
};

const discovery = {
  table: [{
      range: 1,
      table: unnaturalFeature
    },
    {
      range: 4,
      table: naturalFeature
    },
    {
      range: 6,
      table: evidence
    },
    {
      range: 8,
      name: '_creatures.creature_'
    },
    {
      range: 12,
      table: structure
    },
  ]
};

module.exports = {
  arcane,
  burial,
  discovery,
  divine,
  dwelling,
  enigmatic,
  evidence,
  infrastructure,
  lair,
  landmark,
  naturalFeature,
  obstacle,
  planar,
  remains,
  resource,
  ruin,
  stash,
  structure,
  terrainChange,
  tracks,
  unnaturalFeature,
  waterFeature,
};
