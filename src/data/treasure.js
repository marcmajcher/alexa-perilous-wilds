'use strict';

/* eslint-env node */

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

const magicItem = {
  table: [{
    range: 8,
    table: utilityItems
  }, {
    range: 12,
    table: artItems
  }],
  template: '_AAN_ _RESULT_ of _ability_'
};

module.exports = {
  treasure,
  utilityItems,
  artItems,
  clues,
  portals,
  signsOfOffice,
  gems,
  magicItem
};
