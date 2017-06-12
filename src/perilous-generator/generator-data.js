'use strict';

/* eslint-env node */

/* Data for places */

const places = [
  'Barrier', 'Beach', 'Bowl', 'Camp', 'Cave', 'Circle', 'City', 'Crater', 'Cliff',
  'Crossing', 'Crypt', 'Den', 'Ditch', 'Door', 'Falls', 'Fence', 'Field', 'Fort',
  'Grove', 'Hill', 'Hole', 'Hut', 'Keep', 'Lake', 'Marsh', 'Meadow', 'Pile', 'Pit',
  'Post', 'Ridge', 'Ridge', 'Ring', 'Rise', 'Rock', 'Ruin', 'Shrine', 'Spire',
  'Spring', 'Stone', 'Tangle', 'Temple', 'Throne', 'Tomb', 'Tower', 'Town',
  'Tree', 'Vale', 'Valley', 'Village', 'Wall',
];

const placeAdjectives = [
  'Ancient', 'Ashen', 'Black', 'Bloody', 'Blue', 'Bright', 'Bright', 'Broken',
  'Burning', 'Clouded', 'Copper', 'Cracked', 'Dark', 'Dead', 'Doomed', 'Endless',
  'Fallen', 'Far', 'Fearsome', 'Floating', 'Found', 'Frozen', 'Ghostly', 'Gloomy',
  'Golden', 'Grim', 'Hidden', 'High', 'Iron', 'Jagged', 'Lost', 'Low', 'Near',
  'Petrified', 'Red', 'Screaming', 'Sharp', 'Shattered', 'Shifting', 'Shining',
  'Shivering', 'Shrouded', 'Silver', 'Stalwart', 'Stoney', 'Sunken', 'Thorny',
  'Thundering', 'White', 'Withered',
];

const placeNouns = [
  '__NAME__', '_Arm', 'Ash', '_Captain', 'Children', 'Cinder', '_Cleric',
  '_Corpse', 'Courage', 'Crystal', '_Dagger', '_Demon', '_Devil',
  'Doom', 'Eyes', 'Fear', '_Fighter', '_Finger', 'Fire', '_Foot',
  '_Ghost', '_Giant', '_Goblin', 'God', 'Gold', '_Hand', '_Head',
  '_Hero', 'Hope', '_King', '_Knight', '_Knave', '_Maiden',
  'Muck', 'Mud', 'Murder', '_Queen', '_Sailor', 'Silver', '_Skull',
  'Smoke', 'Souls', '_Spear', 'Spirit', 'Stone', '_Sword', '_Thief',
  '_Troll', 'Water', '_Wizard',
];

exports.place = {
  places,
  adjectives: placeAdjectives,
  nouns: placeNouns
};

/* Data for regions */

const terrain = [
  'Bay', 'Bluffs', 'Bog', 'Cliffs', 'Desert', 'Downs', 'Dunes', 'Expanse',
  'Fells', 'Fen', 'Flats', 'Foothills', 'Forest', 'Groves', 'Heath', 'Heights',
  'Hills', 'Hollows', 'Jungle', 'Lake', 'Lowland', 'March', 'Marsh', 'Meadows',
  'Moor', 'Morass', 'Mounds', 'Mountains', 'Peaks', 'Plains', 'Prairie',
  'Quagmire', 'Range', 'Reach', 'Sands', 'Savanna', 'Scarps', 'Sea',
  'Slough', 'Sound', 'Steppe', 'Swamp', 'Sweep', 'Teeth', 'Thicket',
  'Upland', 'Wall', 'Waste', 'Wasteland', 'Woods',
];

const regionAdjectives = [
  'Ageless', 'Ashen', 'Black', 'Blessed', 'Blighted', 'Blue', 'Broken',
  'Burning', 'Cold', 'Cursed', 'Dark', 'Dead', 'Deadly', 'Deep', 'Desolate',
  'Diamond', 'Dim', 'Dismal', 'Dun', 'Eerie', 'Endless', 'Fallen', 'Far',
  'Fell', 'Flaming', 'Forgotten', 'Forsaken', 'Frozen', 'Glittering', 'Golden',
  'Green', 'Grim', 'Holy', 'Impassable', 'Jagged', 'Light', 'Long', 'Misty',
  'Perilous', 'Purple', 'Red', 'Savage', 'Shadowy', 'Shattered', 'Shifting',
  'Shining', 'Silver', 'White', 'Wicked', 'Yellow',
];

const regionNouns = [
  '__NAME__', 'Ash', 'Bone', 'Darkness', '_Dead', 'Death', 'Desolation',
  'Despair', '_Devil', 'Doom', '_Dragon', 'Fate', 'Fear', 'Fire', 'Fury',
  '_Ghost', '_Giant', '_God', 'Gold', 'Heaven', 'Hell', 'Honor', 'Hope',
  'Horror', '_King', 'Life', 'Light', '_Lord', 'Mist', 'Peril', '_Queen',
  'Rain', 'Refuge', 'Regret', '_Savior', 'Shadow', 'Silver', '_Skull', '_Sky',
  'Smoke', '_Snake', 'Sorrow', '_Storm', '_Sun', '_Thorn', 'Thunder',
  '_Traitor', '_Troll', 'Victory', '_Witch',
];

exports.region = {
  terrain,
  adjectives: regionAdjectives,
  nouns: regionNouns
};

/* Data for treasures */

const treasure = [
  'Nothing',
  '{2d8} coins',
  '_UTILITYITEM_',
  '{4d10} coins',
  'A small _VALUABLE_ worth {2d10x10} coins',
  'A minor magical trinket',
  'A useful _CLUE_',
  'A bag of {1d4x100} coins',
  'A small _VALUABLE_ of great value, worth {2d6x100} coins',
  'A chest of coins and gems, worth {3d6x100} coins',
  'A magical item, or magical effect',
  'Several bags of cointaining {2d4x100} coins',
  'A _SIGNOFOFFICE_ worth at least {3d4x100} coins',
  'A large _ARTITEM_ worth {4d4x100} coins',
  'A unique item worth at least {5d4x100} coins',
  'Everything needed to learn a new spell, and _ROLLAGAIN_',
  'A _PORTAL_, and _ROLLAGAIN_',
  'Something relating to one of the characters, and _ROLLAGAIN_',
  'A hoard! {1d10x1000} coins, and {1d10x10} gems worth {2d6x100} coins each'
];

const utilityItems = [
  'A key', 'A lockpick', 'A potion', 'Some food', 'Some clothing', 'A cloak',
  'A decanter', 'A cup', 'A small cage', 'A small empty coffer', 'An empty box',
  'A musical instrument', 'A tool', 'A book', 'A scroll', 'A weapon', 'A staff',
  'A wand', 'A vase', 'A key', 'Some good food', 'Some clothes', 'An old book',
  'A piece of armor', 'A shield', 'A helm', 'A mirror', 'A small mirror',
  'An hourglass', 'A pet', 'A mount', 'A small pet', 'A device',
  'A small device', 'A construct'
];

const artItems = [
  'trinket', 'charm', 'painting', 'piece of pottery', 'ring', 'pair of gloves',
  'carpet', 'tapestry', 'statuette', 'idol', 'flag', 'banner', 'bracelet',
  'armband', 'necklace', 'amulet', 'belt', 'harness', 'hat', 'mask', 'orb',
  'sigil', 'rod', 'crown', 'scepter'
];

const gems = ['diamond', 'ruby', 'sapphire', 'emerald', 'opal', 'pearl'];
const clues = ['map', 'note'];
const portals = ['portal', 'secret path', 'magical portal', 'hidden pathway'];
const signsOfOffice = ['crown', 'banner', 'signet ring', 'sign of office'];

exports.treasure = {
  treasure,
  utilityItems,
  artItems,
  clues,
  portals,
  signsOfOffice,
  gems
};

/* Data for discoveries */

const discoveryArcane = {
  size: 12,
  table: [{
      range: 2,
      name: 'resdiue'
    },
    {
      range: 5,
      name: 'blight'
    },
    {
      range: 6,
      name: 'mutation'
    },
    {
      range: 7,
      name: 'alteration'
    },
    {
      range: 10,
      name: 'enchantment'
    },
    {
      range: 11,
      name: 'source'
    },
    {
      range: 12,
      name: 'repository'
    },
  ],
  tags: [
    'alignment',
    'magicType'
  ],
  template: '_AAN_ _alignment_ _magicType_ _RESULT_'
};

const discoveryPlanar = [
  'distortion', 'distortion', 'warp', 'warp', 'portal', 'portal', 'gate',
  'gate', 'rift', 'tear', 'outpost', 'outpost'
];
const discoveryDivine = [
  'mark', 'sign', 'sign', 'cursed place', 'cursed place', 'cursed place',
  'hallowed place', 'hallowed place', 'hallowed place', 'watched place',
  'watched place', 'presence'
];
const discoveryLair = [
  'burrow', 'burrow', 'burrow', 'cave', 'cave', 'tunnels', 'tunnels', 'nest',
  'aerie', 'hive', '_RUINS_'
];
const discoveryObstacle = [
  'difficult ground', 'difficult ground', 'difficult ground',
  'difficult ground', 'difficult ground', 'cliff', 'crevasse', 'chasm'
];
const discoveryTerrainChange = [
  'limited area of another _TERRAINTYPE_',
  'limited area of another _TERRAINTYPE_',
  'limited area of another _TERRAINTYPE_',
  'limited area of another _TERRAINTYPE_',
  'crevice', 'hole', 'pit', 'cave', 'altitude change', 'altitude change',
  'canyon', 'valley', 'rise in distance', 'peak in distance'
];
const discoveryWaterFeature = [
  'spring', 'hot spring', 'waterfall', 'geyser', 'creek', 'stream', 'creek',
  'brook', 'stream', 'creek', 'brook', 'stream', 'pond', 'pond', 'lake',
  'lake', 'river', 'river', 'river', 'river', 'sea', 'sea', 'ocean', 'ocean'
];
const discoveryLandmark = [
  'landmark geyser', 'landmark waterfall', 'landmark waterfall', 'ancient tree',
  'giant flowers', 'grove', 'crater', 'rock formation', 'crater',
  'rock formation', '_ODDITY_', '_ODDITY_',
];
const discoveryResource = [
  'game', 'fruit', 'vegetable', 'game', 'herb', 'spice', 'timber', 'stone',
  'dye source', 'copper ore', 'iron ore', 'precious metal'
];
const discoveryTracks = [];
const discoveryRemains = [];
const discoveryStash = [];
const discoveryEnigmatic = [];
const discoveryInfrastructure = [];
const discoveryDwelling = [];
const discoveryBurial = [];
const discoveryRuin = [];

const discoveryUnnaturalFeatures = {
  size: 12,
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
  size: 12,
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
  size: 12,
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
  size: 12,
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
  size: 12,
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

/* Data for steadings */

exports.steadings = {};


/* Data for dangers */
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
  size: 'd12',
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
  size: 'd12',
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

exports.dangers = {
  size: 'd12',
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

/* Data for creatures */

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
  size: 'd12',
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
  size: 'd12',
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
  size: 'd12',
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

exports.creatures = {
  size: 'd12',
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

/* Data sets for Details */

exports.details = {

  ability: [
    'bless/curse',
    'entangle/trap/snare',
    'poison/disease',
    'paralyze/petrify',
    'mimic/camouflage',
    'seduce/hypnotize',
    'dissolve/disintegrate',
    '_magic type_',
    'drain life/drain magic',
    'immunity: _element_',
    'read minds/control minds',
    '_ROLLAGAIN_, _ROLLAGAIN_',
  ],
  activity: [
    'laying trap/laying ambush',
    'fighting/at war',
    'prowling/on patrol',
    'hunting/foraging',
    'eating/resting',
    'crafting/praying',
    'traveling/relocating',
    'exploring/lost',
    'returning home',
    'building/excavating',
    'sleeping',
    'dying',
  ],
  adjective: [
    'slick/slimy',
    'rough/hard/sharp',
    'smooth/soft/dull',
    'corroded/rusty',
    'rotten/decaying',
    'broken/brittle',
    'stinking/smelly',
    'weak/thin/drained',
    'strong/fat/full',
    'pale/poor/shallow',
    'dark/rich/deep',
    'colorful',
  ],
  age: [
    'being born/being built',
    'young/recent',
    'young/recent',
    'young/recent',
    'middle-aged',
    'middle-aged',
    'middle-aged',
    'old',
    'old',
    'ancient',
    'ancient',
    'pre-historic'
  ],
  alignment: [
    'Chaotic',
    'Chaotic',
    'Evil',
    'Evil',
    'Neutral',
    'Neutral',
    'Neutral',
    'Neutral',
    'Good',
    'Good',
    'Lawful',
    'Lawful',
  ],
  aspect: [
    'power/strength',
    'trickery/dexterity',
    'time/constitution',
    'knowledge/intelligence',
    'nature/wisdom',
    'culture/charisma',
    'war/lies/discord',
    'peace/truth/balance',
    'hate/envy',
    'love/admiration',
    '_element_',
    '_ROLLAGAIN_, _ROLLAGAIN_',
  ],
  condition: [
    'being built/being born',
    'intact/healthy/stable',
    'occupied/active/alert',
    'worn/tired/weak',
    'vacant/lost',
    'ruined/defiled/dying',
    'disappeared/dead'
  ],
  disposition: [
    'attacking',
    'hostile/aggressive',
    'hostile/aggressive',
    'hostile/aggressive',
    'cautious/doubtful',
    'cautious/doubtful',
    'fearful/fleeing',
    'neutral',
    'neutral',
    'neutral',
    'curious/hopeful',
    'friendly'
  ],
  element: [
    'air',
    'earth',
    'fire',
    'water',
    'life',
    'death'
  ],
  feature: [
    'heavily armored',
    'winged/flying',
    'multiple heads/headless',
    'many eyes/one eye',
    'many limbs/many tails',
    'tentacles/tendrils',
    '_aspect_',
    '_element_',
    '_magic type_',
    '_oddity_',
    '_ROLLAGAIN_, _ROLLAGAIN_',
  ],
  'magic type': [
    'divination',
    'enchantment',
    'evocation',
    'illusion',
    'necromancy',
    'summoning'
  ],
  'number appearing': [
    'Solitary (1)',
    'Solitary (1)',
    'Solitary (1)',
    'Solitary (1)',
    'Group (1d6+2)',
    'Group (1d6+2)',
    'Group (1d6+2)',
    'Group (1d6+2)',
    'Group (1d6+2)',
    'Horde (4d6 per wave)',
    'Horde (4d6 per wave)',
    'Horde (4d6 per wave)',
  ],
  oddity: [
    'weird color/weird smell/weird sound',
    'geometric',
    'web/network/system',
    'crystalline/glass-like',
    'fungal',
    'gaseous/smokey',
    'mirage/illusion',
    'volcanic/explosive',
    'magnetic/repellant',
    'devoid of life',
    'unexpectedly alive',
    '_ROLLAGAIN_, _ROLLAGAIN_',
  ],
  orientation: [
    'down',
    'earthward',
    'north',
    'northeast',
    'east',
    'southeast',
    'south',
    'southwest',
    'west',
    'northwest',
    'up',
    'skyward'
  ],
  ruination: [
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
    'better prospects elsewhere'
  ],
  size: [
    'tiny',
    'small',
    'small',
    'medium-sized',
    'medium-sized',
    'medium-sized',
    'medium-sized',
    'medium-sized',
    'medium-sized',
    'large',
    'large',
    'huge'
  ],
  tag: [
    'Amorphous',
    'Cautious',
    'Construct',
    'Devious',
    'Intelligent',
    'Magical',
    'Organized',
    'Organized',
    'Planar',
    'Stealthy',
    'Terrifying',
    '_ROLLAGAIN_'
  ],
  terrain: [
    'wasteland/desert',
    'flatland',
    'plain',
    'wetland/marsh/swamp',
    'woodland',
    'forest',
    'jungle',
    'highland',
    'hills',
    'mountains',
    'mountains',
    '_oddity_'
  ],
  visibility: [
    'buried/camouflaged/nigh invisible',
    'buried/camouflaged/nigh invisible',
    'partly covered/overgrown/hidden',
    'partly covered/overgrown/hidden',
    'partly covered/overgrown/hidden',
    'partly covered/overgrown/hidden',
    'obvious/in plain sight',
    'obvious/in plain sight',
    'obvious/in plain sight',
    'visible at near distance',
    'visible at near distance',
    'visible at great distance/focal point'
  ],

};

/* Data for NPCs */

exports.NPCs = {};


/* Data for occupations */

exports.occupations = {};


/* Data for NPC traits */

exports.NPCTraits = {};


/* Data for NPC followers */

exports.NPCFollowers = {};


/* Data for dungeons */

exports.dungeons = {};
