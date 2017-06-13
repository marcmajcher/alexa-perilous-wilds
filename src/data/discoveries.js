'use strict';

/* eslint-env node */

const discoveryArcane = {
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
  tags: [
    'alignment', 'magicType'
  ],
  template: '_AAN_ _alignment_ _magicType_ _RESULT_'
};

const discoveryPlanar = {
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
  tags: ['alignment', 'element'],
  template: '_AAN_ _RESULT_ of _alignment_ _element_'
};

const discoveryDivine = {
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
  tags: ['alignment', 'aspect'],
  template: '_AAN_ _RESULT_ of _alignment_ _aspect_'
};

const discoveryLair = {
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
    table: '_ruins_'
  }],
  tags: ['_creature_', '_visibility_'],
  template: '_AAN_ _creature_ _RESULT_, _visibility_'
};

const discoveryObstacle = [
  'difficult ground', 'difficult ground', 'difficult ground',
  'difficult ground', 'difficult ground', 'cliff', 'crevasse', 'chasm',
  'ravine', 'gorge', '_oddity_'
];

const discoveryTerrainChange = [
  'limited area of another _TERRAINTYPE_',
  'limited area of another _TERRAINTYPE_',
  'limited area of another _TERRAINTYPE_',
  'limited area of another _TERRAINTYPE_',
  'crevice/hole/pit/cave', 'crevice/hole/pit/cave',
  'altitude change', 'altitude change',
  'canyon', 'valley', 'rise in distance', 'peak in distance'
];

const discoveryWaterFeature = [
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

const discoveryLandmark = [
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

const discoveryResource = {
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
  tags: ['_size_', '_visibility_'],
  template: '_size_ _RESULT_ _visibility_'
};

const discoveryTracks = {
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
  tags: ['age', 'creature'],
  template: '_RESULT_ from _AAN_ _age_ _creature_'
};

const discoveryRemains = {
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
  tags: ['age', 'visibility'],
  template: '_age_ _RESULT_ _visibility_'
};

const discoveryStash = {
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

const discoveryEnigmatic = {
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

const discoveryInfrastructure = {
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

const discoveryDwelling = {
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

const discoveryBurial = {
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

const discoveryRuin = {
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

const discoveryUnnaturalFeatures = {
  table: [{
      range: 9,
      table: discoveryArcane
    },
    {
      range: 11,
      table: discoveryPlanar
    },
    {
      range: 12,
      table: discoveryDivine
    }
  ]
};

const discoveryNaturalFeatures = {
  table: [{
      range: 2,
      table: discoveryLair
    }, {
      range: 4,
      table: discoveryObstacle
    }, {
      range: 7,
      table: discoveryTerrainChange
    },
    {
      range: 9,
      table: discoveryWaterFeature
    }, {
      range: 11,
      table: discoveryLandmark
    }, {
      range: 12,
      table: discoveryResource
    }
  ]
};

const discoveryEvidence = {
  table: [{
      range: 6,
      table: discoveryTracks
    },
    {
      range: 10,
      table: discoveryRemains
    },
    {
      range: 12,
      table: discoveryStash
    },
  ]
};

const discoveryStructures = {
  table: [{
      range: 1,
      table: discoveryEnigmatic
    },
    {
      range: 3,
      table: discoveryInfrastructure
    },
    {
      range: 4,
      table: discoveryDwelling
    },
    {
      range: 6,
      table: discoveryBurial
    },
    {
      range: 8,
      table: 'steading'
    },
    {
      range: 12,
      table: discoveryRuin
    },
  ]
};

const discoveries = {
  table: [{
      range: 1,
      table: discoveryUnnaturalFeatures
    },
    {
      range: 4,
      table: discoveryNaturalFeatures
    },
    {
      range: 6,
      table: discoveryEvidence
    },
    {
      range: 8,
      table: 'creature'
    },
    {
      range: 12,
      table: discoveryStructures
    },
  ]
};

exports.discovery = discoveries;
