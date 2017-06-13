'use strict';

/* eslint-env node */

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

module.exports = {
  terrain,
  adjectives: regionAdjectives,
  nouns: regionNouns
};
