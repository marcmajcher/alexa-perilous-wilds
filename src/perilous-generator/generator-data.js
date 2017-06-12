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
  }, ],
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

const discoveryTracks = [
  // 1 - 3 faint / unclear
  // 4 - 6 definite / clear
  // 7 - 8 multiple
  // 9 - 10 signs of violence
  // 11 - 12 trail of blood / other
  // Age, Creature
];

const discoveryRemains = [
  // 1 - 4 bones
  // 5 - 7 corpse / carcass
  // 8 - 9 site of violence
  // 10 junk / refuse
  // 11 lost supplies / cargo
  // 12 tools / weapons / armor
  // Age, Visibility
];

const discoveryStash = [
  // 1 - 3 trinkets / coins
  // 4 - 5 tools / weapons / armor 6 - 7 map
  // 8 - 9 food / supplies
  // 10 - 12 treasure(p43)
];

const discoveryEnigmatic = [
  // 1 - 4 earthworks
  // 5 - 8 megalith
  // 9 - 11 statue / idol / totem
  // 12 Oddity
  // Age(1 d8 + 4), Size(1 d8 + 4),
  // Visibility
];

const discoveryInfrastructure = [
  //   1 - 4 track / path
  //   5 - 8 road
  //   9 - 10 bridge / ford
  //   11 mine / quarry
  //   12 aqueduct / canal / portal
  //   Creature responsible(1 d4 + 4)
];

const discoveryDwelling = [
  // 1 - 3 campsite
  // 4 - 6 hovel / hut
  // 7 - 8 farm
  // 9 - 10 inn / roadhouse
  // 11 - 12 tower / keep / estate
  //   Creature responsible(1 d4 + 4)
];

const discoveryBurial = [
  // 1 - 2 grave marker / barrow 3 - 4 graveyard / necropolis 5 - 6 tomb / crypt
  // 7 - 9 shrine
  // 10 - 11 temple / retreat
  // 12 great temple
  // Creature responsible(1 d4 + 4), Alignment, Aspect
];

const discoveryRuin = [
  // 1 - 2 Infrastructure(1 d6 + 6)
  // 3 - 4 Dwelling(1 d8 + 4)
  // 5 - 6 Burial / Religious(1 d8 + 4)
  // 7 - 8 Steading(1 d10 + 2)
  // 9 - 12 Dungeon(pp60 - 61)
  // Creature responsible(1 d4 + 4), Age(1 d8 + 4), Ruination, Visibility
];

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

/* Data for steadings */

exports.steadings = {};

/*
Steading . Choose or roll 1d4+4 on the first Creature table (page 49) to see who built it.
            -------------------------------------------------------------------------------------------------------------------------------------
1-5 Vi l l age ...............................................................................................................................................................................
Poor, Steady, Militia, Resource (GM choice) and has an Oath (steading of GM’s choice). If the village is part of a kingdom or empire, choose 1 or roll 1d12:
1-3 Natural defenses: Safe, -Defenses
4-6 Abundant resources: +Prosperity, Resource (GM choice), Enmity (GM choice) 7-8 Protected by another steading: Oath (that steading), +Defenses
9-10 On a major road: Trade (GM choice), +Prosperity
11 Built around a wizard’s tower: Personage (the wizard), Blight (arcane creatures)
12 Built on a site of religious significance: Divine, History (GM choice)
Then, choose 1 problem or roll 1d12:
1-2 Surrounded by arid or uncultivable land: Need (food)
3-4 Dedicated to a deity: Religious (that deity), Enmity (steading of opposing deity)
5-6 Recently at war: -Population, -Prosperity if they fought to the end, -Defenses if they lost
7-8 Monster problem: Blight (that monster), Need (adventurers)
9-10 Absorbed another village: +Population, Lawless
11-12 Remote or unwelcoming: -Prosperity, Dwarven or Elven or other non-human
-------------------------------------------------------------------------------------------------------------------------------------
6-8 Town ...............................................................................................................................................................................
Moderate, Steady, Watch, and Trade (with 2 places of GM’s choice).
If the town is listed as Trade by another steading, choose 1 or roll 1d12:
1 Booming: Booming, Lawless
2-3 At a crossroads: Market, +Prosperity
4-5 Defended by another steading: Oath (that steading), +Defenses
6-7 Built around a church: Power (divine)
8-10 Built around a craft: Craft (your choice), Resource (something required for that craft) 11-12 Built around a military post: +Defenses
Then, choose 1 problem or roll 1d12:
1-2 Outgrowing a vital resource: Need (that resource), Trade (a steading with that resource) 3-4 Offers defense to others: Oath (GM choice), -Defenses
5-6 Outlaw rumored to live there: Personage (the outlaw), Enmity (steading preyed upon) 7-8 Controls a good/service: Exotic (that good/service), Enmity (steading with ambition) 9-10 Suffers from disease: -Population
11-12 Popular meeting place: +Population, Lawless

9-11 Keep ...............................................................................................................................................................................
Poor, Shrinking, Guard, Need (supplies), Trade (someplace with supplies), Oath (GM’s choice). If the keep is owed fealty by at least one other steading, choose 1 or roll 1d12:
1-2 Belongs to a noble family: +Prosperity, Power (political)
3-4 Run by a skilled commander: Personage (the commander), +Defenses
5-6 Stands watch over a trade road: +Prosperity, Guild (trade)
7-8 Used to train special troops: Arcane, -Population
9-10 Surrounded by fertile land: remove Need (Supplies)
11-12 Stands on a border: +Defenses, Enmity (steading on the other side of the border)
Then, choose 1 problem or roll 1d12:
1-3 Built on a naturally defensible position: Safe, -Population
4 Formerly occupied by another power: Enmity (steadings of that power)
5 Safe haven for brigands: Lawless
6 Built to defend from a specific threat: Blight (that threat)
7 Has seen horrible bloody war: History (battle), Blight (restless spirits)
8 Is given the worst of the worst: Need (skilled recruits)
9-10 Suffers from disease: -Population
11-12 Popular meeting place: +Population, -Law
-------------------------------------------------------------------------------------------------------------------------------------
12 City ...............................................................................................................................................................................
Moderate, Steady, Guard, Market, Guild (GM’s choice), 2+ Oaths (steadings of GM’s choice) If the city has trade with and fealty from at least 1 steading, choose 1 or roll 1d12:
1-3 Permanent defenses, such as walls: +Defenses, Oath (GM’s choice) 4-6 Ruled by a single individual: Personage (the ruler), Power (political) 7 Diverse: Dwarven or Elven or both
8-10 Tradehub:Trade(everynearbysteading),+Prosperity
11 Ancient, built on top of its own ruins: History (your choice), Divine
12 Center of learning: Arcane, Craft (your choice), Power (arcane)
Then, choose 1 problem or roll 1d12:
1-3 Outgrown its resources: +Population, Need (food)
4-6 Designs on nearby territory: Enmity (nearby steadings), +Defenses 7-8 Ruled by a theocracy: -Defenses, Power (divine)
9-10 Ruled by the people: -Defenses, +Population
11 Supernatural defenses: +Defenses, Blight (related supernatural creatures)
12 Occupies a place of power: Arcane, Personage (whoever watches the place of power),
Blight (arcane creatures)

*/


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

exports.dangers = {

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

exports.creatures = {

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
    '_ROLLAGAIN_ and _ROLLAGAIN_',
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

/*

NPC
Roll to determine Context if it hasn’t already been established, then 1d12 for Oc-
cupation if needed. Use the tables on the next page for traits and followers. Context . Where they are encountered, or where they come from.
----------------------------------------- -----------------------------------------
              1-3 Wilderness 4-9 Rural ...................................................... ......................................................
-----------------------------------------
1 Criminal -4 1
2 Criminal -4 2
3 adventurer/explorer 3
4 adventurer/explorer 4
5 hunter/gatherer 5
6 hunter/gatherer 6
7 Commoner 7
8 Commoner 8
9 ranger/scout 9
10 ranger/scout 10
11 soldier/mercenary 11
beggar/urchin Criminal -1 adventurer/explorer hunter/gatherer Commoner Commoner Commoner Commoner Tradesperson Merchant -1 militia/soldier/guard Official
10-12 Urban ......................................................
12 Official 12 .............................................. ..............................................
1 beggar/urchin 2 beggar/urchin 3 Criminal
4 Commoner
5 Commoner
6 Commoner
7 Commoner
8 Tradesperson 9 Merchant
10 Specialist
11 militia/soldier/guard
12 Official ..............................................
Activity, Alignment, NPC Trait
Activity, Alignment, Activity, Alignment, NPC Trait NPC Trait
Occupation . If not already determined by initial roll.
         -----------------------------------------
-----------------------------------------
-----------------------------------------
1 Criminal ......................................................
2-6 Commoner ......................................................
7-8 Tradesperson ......................................................
1 bandit/brigand/thug 2 bandit/brigand/thug 3 thief
4 thief
5 bodyguard/tough 6 bodyguard/tough 7 burglar
8 burglar
9 dealer/fence
10 racketeer
11 lieutenant
12 boss
1 housewife/husband 2 hunter/gatherer
3 hunter/gatherer
4 farmer/herder
5 farmer/herder
6 farmer/herder
7 laborer/servant
8 laborer/servant
9 driver/porter/guide 10 sailor/soldier/guard 11 clergy/monk
12 apprentice/adventurer -----------------------------------------
1 cobbler/furrier/tailor 2 weaver/basketmaker
3 potter/carpenter
4 mason/baker/chandler 5 cooper/wheelwright
6 tanner/ropemaker
7 smith/tinker
8 stablekeeper/herbalist
9 vintner/jeweler
10 inkeeper/tavernkeeper
11 artist/actor/minstrel
12 armorer/weaponsmith
-----------------------------------------
-----------------------------------------
12 Official ......................................................
9-10 Merchant ......................................................
11 Specialist ......................................................
1 general goods/outfitter
2 general goods/outfitter 2 3 general goods/outfitter 3 4 raw materials 4 5 grain/livestock 5 6 ale/wine/spirits 6 7 clothing/jewelry 7 8 weapons/armor 8 9 spices/tobacco 9 10 labor/slaves 10 11 books/scrolls 11 12 magic supplies/items 12
52
1
undertaker sage/scholar/wizard 2 writer/illuminator 3 perfumer 4 architect/engineer 5 locksmith/clockmaker 6 physician/apothecary 7 navigator/guide 8 alchemist/astrologer 9 spy/diplomat 10 cartographer 11 inventor 12
1
town crier
tax collector armiger/gentry armiger/gentry reeve/sheriff/constable mayor/magistrate priest/bishop/abbot guildmaster knight/templar elder/high priest
noble (baron, etc.) lord/lady/king/queen


NPC Trait
Roll 1d12 for category and 1d12 for
prompt if you want something quick to
say. If you want someone more memo-
rable, roll once in each category.
NPC Follower
Roll 1d12 for each category; reconcile to
the fiction, tag, and equip as you see fit.
----------------------------------------------------------------
................................................................................... 1-3 A liability: Quality -1, +0 tags
4-9 Competent: Quality +0, +1 tags
10-11 Fully capable: Quality +1, +2 tags
12 Exceptional: Quality +2, +4 tags
1-6 Physical Appearance ...................................................................................
1 disfigured (missing teeth, eye, etc.) 2 lasting injury (bad leg, arm, etc.)
3 tattooed/pockmarked/scarred
4 unkempt/shabby/grubby
5 big/thick/brawny
6 small/scrawny/emaciated
7 notable hair (wild, long, none, etc.)
8 notable nose (big, hooked, etc.)
9 notable eyes (blue, bloodshot, etc.)
10 clean/well-dressed/well-groomed
11 attractive/handsome/stunning
12 they are [roll again] despite [a contra-
----------------------------------------------------------------
dictory detail of your choice] ----------------------------------------------------------------
1 loner/alienated/antisocial 2 cruel/belligerent/bully
3 anxious/fearful/cowardly 4 envious/covetous/greedy 5 alo of/haught y/a r ro ga nt
6 awkward/shy/self-loathing
7 orderly/compulsive/controlling
8 confident/impulsive/reckless
9 kind/generous/compassionate
10 easygoing/relaxed/peaceful
11 cheerful/happy/optimistic
12 they are [roll again] despite [a contra-
----------------------------------------------------------------
7-9 Personality ...................................................................................
...................................................................................
1-2 0 (little faith in leader’s cause)
3-10 +1
11-12 +2 (great faith in leader’s cause)
dictory detail of your choice] ----------------------------------------------------------------
................................................................................... 1 Loot, pillage, and burn
2 Hold a grudge and seek payback
3 Question leadership or authority
4-5 Lord over others
6-7 Act impulsively
8-9 Give in to temptation
10-11 Slack off
12 Avoid danger or punishment
----------------------------------------------------------------
................................................................................... 1 Debauchery
2 Vengeance
3-5 Lucre
6-7 Renown
8-9 Glory
10 Affection
11 Knowledge
12 Good
10-12 Quirk ...................................................................................
Cost
1 insecure/racist/xenophobic
2 addict (sweets, drugs, sex, etc.)
3 phobia (spiders, fire, darkness, etc.)
4 allergic/asthmatic/chronically ill
5 skeptic/paranoid
6 superstitious/devout/fanatical
7 miser/pack-rat
8 spendthrift/wastrel
9 smart aleck/know-it-all
10 artistic/dreamer/delusional
11 naive/idealistic
12 they are [roll again] despite [a contra-
dictory detail of your choice]
----------------------------------------------------------------
Ask the Fates
----------------------------------------------------------------
Competence
Background
................................................................................... 1-2 Life of servitude/oppression: +Meek
3 Past their prime: -1 to Quality, +1 Wise 4-5 Has lived a life of danger: +2 tags
6-9 Unremarkable
10 Has lived a life of privilege: +1 tag
11 Specialist: +1 to Quality, -2 tags
12 Roll twice on this table
Loya lty
----------------------------------------------------------------
Instinct
Hit Points Damage die
................................................................................... 1-3 3 HP d4
4-9 6 HP d6
10-12 9 HP d8

*/

/* Data for occupations */

exports.occupations = {};


/* Data for NPC traits */

exports.NPCTraits = {};


/* Data for NPC followers */

exports.NPCFollowers = {};


/* Data for dungeons */

exports.dungeons = {};


/*

Dungeons
Roll to determine different details as needed.
                Dungeon Size
Dungeon Foundation . Who built it, to what end?
                -----------------------------------------
----------------------------------------- -----------------------------------------
Size Themes Areas* ......................................................
Builder Function
1-3 sm. 2/1d4 6/1d6+2
...................................................... ...................................................... 1 aliens/precursors 1 source/portal
2 demigod/demon 2 mine
3-4 natural (caves, etc.) 3-4 tomb/crypt
5 religious order/cult 5 prison
6-7 Humanoid (p49) 6-7 lair/den/hideout
8-9 dwarves/gnomes 8-9 stronghold/sanctuary 10 elves 10 shrine/temple/oracle 11 wizard/madman 11 archive/library
12 monarch/warlord 12 unknown/mystery
4-9 md. 3/1d6
10-11 lg. 4/1d6+1
12/2d6+4 16/3d6+6 24/4d6+10
12 huge 5/1d6+2 ......................................................
*total common and unique
Dungeon Ruination
----------------------------------------- 1 arcane disaster
2 damnation/curse
3-4 earthquake/fire/flood 5-6 plague/famine/drought 7-8 overrun by monsters 9-10 war/invasion
11 depleted resources
12 better prospects elsewhere
          Dungeon Theme . What’s it all about? Choose or roll according to Dungeon Size. ----------------------------------------- ----------------------------------------- -----------------------------------------
          1-5 Mundane 6-9 Un usua l 10-12 Extraordinary ...................................................... ...................................................... ......................................................
1 rot/decay 1 2 torture/agony 2 3 madness 3 4 all is lost 4 5 noble sacrifice 5 6 savage fury 6 7 survival 7 8 criminal activity 8 9 secrets/treachery 9 10 tricks and traps 10 11 invasion/infestation 11 12 factions at war 12
60
creation/invention 1 Element (p50) 2 knowledge/learning 3 growth/expansion 4 deepening mystery 5 transformation/change 6 chaos and destruction 7 shadowy forces 8 forbidden knowledge 9 poison/disease 10 corruption/blight 11 impending disaster 12
scheming evil divination/scrying blasphemy
arcane research occult forces
an ancient curse mutation
the unquiet dead bottomless hunger incredible power unspeakable horrors holy war
Plumb the Depths
Dungeon Discovery . A starting point: extrapolate, embellish, integrate.
----------------------------------------- ----------------------------------------- -----------------------------------------
                  1-3 Dressing 4-9 Feature 10-12Find ...................................................... ...................................................... ......................................................
1 junk/debris 1 2 tracks/marks 2 3 signs of battle 3 4 writing/carving 4 5 warning 5 6 dead Creature (p49) 6 7 bones/remains 7 8 book/scroll/map 8 9 broken door/wall 9 10 breeze/wind/smell 10 11 lichen/moss/fungus 11 12 Oddity (p50) 12
cave-in/collapse 1 pit/shaft/chasm 2 pillars/columns 3 locked door/gate 4 alcoves/niches 5 bridge/stairs/ramp 6 fou nt ai n/well/p o ol 7 puzzle 8 altar/dais/platform 9 statue/idol 10 magic pool/statue/idol 11 connection to another 12 dungeon
trinkets
tools weapons/armor supplies/trade goods coins/gems/jewelry poisons/potions adventurer/captive magic item scroll/book
magic weapon/armor artifact
roll twice

Dungeon Danger . If they would notice, show signs of an approaching threat. ----------------------------------------- ----------------------------------------- -----------------------------------------
         1-4 Trap 5-11 Creature (p49) 12 Entity ...................................................... ...................................................... ......................................................
1 alarm 1 2 ensnaring/paralyzing 2 3 pit 3 4 crushing 4 5 piercing/puncturing 5 6 chopping/slashing 6 7 confusing (maze, etc.) 7 8 gas (poison, etc.) 8 9 Element (p50) 9 10 ambush 10 11 magical 11 12 roll twice 12
waiting in ambush 1 fighting/squabbling 2 prowling/on patrol 3 looking for food 4 eating/resting 5 guarding 6 on the move 7 searching/scavenging 8 returning to den 9 making plans 10 sleeping 11 dying 12
alien interloper vermin lord
criminal mastermind warlord
high priest
oracle wizard/witch/alchemist Monster lord (p49) evil spirit/ghost undead lord (lich, etc.) demon
dark god
*/
