'use strict';

/* eslint-env node */

const places = [
  'Barrier', 'Beach', 'Bowl', 'Camp', 'Cave', 'Circle', 'City', 'Crater', 'Cliff',
  'Crossing', 'Crypt', 'Den', 'Ditch', 'Door', 'Falls', 'Fence', 'Field', 'Fort',
  'Grove', 'Hill', 'Hole', 'Hut', 'Keep', 'Lake', 'Marsh', 'Meadow', 'Pile', 'Pit',
  'Post', 'Ridge', 'Ridge', 'Ring', 'Rise', 'Rock', 'Ruin', 'Shrine', 'Spire',
  'Spring', 'Stone', 'Tangle', 'Temple', 'Throne', 'Tomb', 'Tower', 'Town',
  'Tree', 'Vale', 'Valley', 'Village', 'Wall',
];

const adjectives = [
  'Ancient', 'Ashen', 'Black', 'Bloody', 'Blue', 'Bright', 'Bright', 'Broken',
  'Burning', 'Clouded', 'Copper', 'Cracked', 'Dark', 'Dead', 'Doomed', 'Endless',
  'Fallen', 'Far', 'Fearsome', 'Floating', 'Found', 'Frozen', 'Ghostly', 'Gloomy',
  'Golden', 'Grim', 'Hidden', 'High', 'Iron', 'Jagged', 'Lost', 'Low', 'Near',
  'Petrified', 'Red', 'Screaming', 'Sharp', 'Shattered', 'Shifting', 'Shining',
  'Shivering', 'Shrouded', 'Silver', 'Stalwart', 'Stoney', 'Sunken', 'Thorny',
  'Thundering', 'White', 'Withered',
];

const nouns = [
  '__NAME__', '_Arm', 'Ash', '_Captain', 'Children', 'Cinder', '_Cleric',
  '_Corpse', 'Courage', 'Crystal', '_Dagger', '_Demon', '_Devil',
  'Doom', 'Eyes', 'Fear', '_Fighter', '_Finger', 'Fire', '_Foot',
  '_Ghost', '_Giant', '_Goblin', 'God', 'Gold', '_Hand', '_Head',
  '_Hero', 'Hope', '_King', '_Knight', '_Knave', '_Maiden',
  'Muck', 'Mud', 'Murder', '_Queen', '_Sailor', 'Silver', '_Skull',
  'Smoke', 'Souls', '_Spear', 'Spirit', 'Stone', '_Sword', '_Thief',
  '_Troll', 'Water', '_Wizard',
];

const getRandom = list => list[Math.floor(Math.random() * list.length)];
const getName = () => 'Gary';
const getPlace = () => getRandom(places);
const getAdjective = () => getRandom(adjectives);
const getNoun = (the = false) => {
  // TBD: getName for __NAME__
  const noun = getRandom(nouns);
  if (noun === '__NAME__') {
    return getName();
  }
  if (noun.indexOf('_') < 0) {
    return noun;
  }
  return `${the ? 'The ' : ''}${noun.slice(1)}`;
};

const generators = [
  () => `The ${getPlace()}`,
  () => `The ${getAdjective()} ${getPlace()}`,
  () => `The ${getPlace()} of ${getNoun(true)}`,
  () => `${getNoun()}'s ${getPlace()}`,
  () => `${getPlace()} of the ${getAdjective()} ${getNoun()}`,
  () => `The ${getAdjective()} ${getNoun()}`
];

exports.generateName = () => getRandom(generators)();
