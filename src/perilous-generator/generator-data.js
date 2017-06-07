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
}

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
}

const treasure = [
  '{2d8} coins',
  '_UTILITYITEM_',
  '{4d10} coins',
  'A small _VALUABLE_ worth {2d10x10} coins',
  'A minor magical trinket',
  'A useful _CLUE_',
  'A bag of {1d4x100} coins',
  'A small _VALUABLE_ of great value, worth {2d6x100} coins',
  'A chest of coins and gems worth {3d6x100} coins',
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
  'A wand', 'A vessel', 'A key', 'Some good food', 'Some clothes', 'An old book',
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

const clues = ['map', 'note'];
const portals = ['portal', 'secret path', 'magical portal', 'hidden pathway'];
const signsOfOffice = ['crown', 'banner', 'signet ring', 'sign of office'];

exports.treasure = {
  treasure,
  utilityItems,
  artItems,
  clues,
  portals,
  signsOfOffice
};
