'use strict';

/* eslint-env node */

const village = {
  table: [{
      range: 3,
      name: 'Village: Natural defenses: Safe, -Defenses : _villageProblem_'
    },
    {
      range: 6,
      name: 'Village: Abundant resources: +Prosperity, Resource (GM choice), Enmity (GM choice) : _villageProblem_'
    },
    {
      range: 8,
      name: 'Village: Protected by another steading: Oath (that steading), +Defenses : _villageProblem_'
    },
    {
      range: 10,
      name: 'Village: On a major road: Trade (GM choice), +Prosperity : _villageProblem_'
    },
    {
      range: 11,
      name: 'Village: Built around a wizard’s tower: Personage (the wizard), Blight (arcane creatures) : _villageProblem_'
    },
    {
      range: 12,
      name: 'Village: Built on a site of religious significance: Divine, History (GM choice) : _villageProblem_'
    },
  ],
  tags: ['Poor', 'Steady', 'Militia', 'Resource', 'Oath to STEADING']
};

const villageProblem = {
  table: [{
      range: 2,
      name: 'Surrounded by arid or uncultivable land: Need (food)'
    },
    {
      range: 4,
      name: 'Dedicated to a deity: Religious (that deity), Enmity (steading of opposing deity)'
    },
    {
      range: 6,
      name: 'Recently at war: -Population, -Prosperity if they fought to the end, -Defenses if they lost'
    },
    {
      range: 8,
      name: 'Monster problem: Blight (that monster), Need (adventurers)'
    },
    {
      range: 10,
      name: 'Absorbed another village: +Population, Lawless'
    },
    {
      range: 12,
      name: 'Remote or unwelcoming: -Prosperity, Dwarven or Elven or other non-human'
    },
  ],
};

const town = {
  table: [{
      range: 1,
      name: 'Town: Booming: Booming, Lawless : _townProblem_'
    },
    {
      range: 3,
      name: 'Town: At a crossroads: Market, +Prosperity : _townProblem_'
    },
    {
      range: 5,
      name: 'Town: Defended by another steading: Oath (that steading), +Defenses : _townProblem_'
    },
    {
      range: 7,
      name: 'Town: Built around a church: Power (divine) : _townProblem_'
    },
    {
      range: 10,
      name: 'Town: Built around a craft: Craft (your choice), Resource (something required for that craft) : _townProblem_'
    },
    {
      range: 12,
      name: 'Town: Built around a military post: +Defenses : _townProblem_'
    },
  ],

  tags: ['Moderate', 'Steady', 'Watch', 'Trade with STEADING and STEADING']
};

const townProblem = {
  table: [{
      range: 2,
      name: 'Outgrowing a vital resource: Need (that resource), Trade (a steading with that resource)'
    },
    {
      range: 4,
      name: 'Offers defense to others: Oath (GM choice), -Defenses'
    },
    {
      range: 6,
      name: 'Outlaw rumored to live there: Personage (the outlaw), Enmity (steading preyed upon)'
    },
    {
      range: 8,
      name: 'Controls a good/service: Exotic (that good/service), Enmity (steading with ambition)'
    },
    {
      range: 10,
      name: 'Suffers from disease: -Population'
    },
    {
      range: 12,
      name: 'Popular meeting place: +Population, Lawless'
    },
  ],

};

const keep = {
  table: [{
      range: 2,
      name: 'Keep: Belongs to a noble family: +Prosperity, Power (political) : _keepProblem_'
    },
    {
      range: 4,
      name: 'Keep: Run by a skilled commander: Personage (the commander), +Defenses : _keepProblem_'
    },
    {
      range: 6,
      name: 'Keep: Stands watch over a trade road: +Prosperity, Guild (trade) : _keepProblem_'
    },
    {
      range: 8,
      name: 'Keep: Used to train special troops: Arcane, -Population : _keepProblem_'
    },
    {
      range: 10,
      name: 'Keep: Surrounded by fertile land: remove Need (Supplies) : _keepProblem_'
    },
    {
      range: 12,
      name: 'Keep: Stands on a border: +Defenses, Enmity (steading on the other side of the border) : _keepProblem_'
    },
  ],

  tags: ['Poor', 'Shrinking', 'Guard', 'Need SUPPLIES', 'Trade with STEADING',
    'Oath to STEADING'
  ]
};

const keepProblem = {
  table: [{
      range: 3,
      name: 'Built on a naturally defensible position: Safe, -Population'
    },
    {
      range: 4,
      name: 'Formerly occupied by another power: Enmity (steadings of that power)'
    },
    {
      range: 5,
      name: 'Safe haven for brigands: Lawless'
    },
    {
      range: 6,
      name: 'Built to defend from a specific threat: Blight (that threat)'
    },
    {
      range: 7,
      name: 'Has seen horrible bloody war: History (battle), Blight (restless spirits)'
    },
    {
      range: 8,
      name: 'Is given the worst of the worst: Need (skilled recruits)'
    },
    {
      range: 10,
      name: 'Suffers from disease: -Population'
    },
    {
      range: 12,
      name: 'Popular meeting place: +Population, -Law'
    },
  ],

};

const city = {
  table: [{
      range: 3,
      name: 'City: Permanent defenses, such as walls: +Defenses, Oath (GM’s choice) : _cityProblem_'
    },
    {
      range: 6,
      name: 'City: Ruled by a single individual: Personage (the ruler), Power (political) : _cityProblem_'
    },
    {
      range: 7,
      name: 'City: Diverse: Dwarven or Elven or both : _cityProblem_'
    },
    {
      range: 10,
      name: 'City: Tradehub:Trade(everynearbysteading),+Prosperity : _cityProblem_'
    },
    {
      range: 11,
      name: 'City: Ancient, built on top of its own ruins: History (your choice), Divine : _cityProblem_'
    },
    {
      range: 12,
      name: 'City: Center of learning: Arcane, Craft (your choice), Power (arcane) : _cityProblem_'
    },
  ],

  tags: ['Moderate', 'Steady', 'Guard', 'Market', 'X Guild', 'Oath to STEADING',
    'Oath to STEADING', 'Trade'
  ]
};

const cityProblem = {
  table: [{
      range: 3,
      name: 'Outgrown its resources: +Population, Need (food)'
    },
    {
      range: 6,
      name: 'Designs on nearby territory: Enmity (nearby steadings), +Defenses'
    },
    {
      range: 8,
      name: 'Ruled by a theocracy: -Defenses, Power (divine)'
    },
    {
      range: 10,
      name: 'Ruled by the people: -Defenses, +Population'
    },
    {
      range: 11,
      name: 'Supernatural defenses: +Defenses, Blight (related supernatural creatures)'
    },
    {
      range: 12,
      name: 'Occupies a place of power: Arcane, Personage (whoever watches the place of power), Blight (arcane creatures)'
    },
  ],

};

const steading = {
  table: [{
    range: 5,
    table: village
  }, {
    range: 8,
    table: town
  }, {
    range: 11,
    table: keep
  }, {
    range: 12,
    table: city
  }]
};

module.exports = {
  city,
  cityProblem,
  keep,
  keepProblem,
  steading,
  town,
  townProblem,
  village,
  villageProblem,
};
