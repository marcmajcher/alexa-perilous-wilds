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

module.exports = {
  places,
  adjectives: placeAdjectives,
  nouns: placeNouns
};
