'use strict';

/* eslint-env node */

const treasure = [
  'nothing',
  '{2d8} coins',
  '_treasure.utilityItem_',
  '{4d10} coins',
  'a small _VALUABLE_ worth {2d10x10} coins',
  'a minor magical trinket: _treasure.magicItem_',
  'a useful _treasure.clue_',
  'a bag of {1d4x100} coins',
  'a small _VALUABLE_ of great value, worth {2d6x100} coins',
  'a chest of coins and gems, worth {3d6x100} coins',
  '_treasure.magicItem_',
  'several bags of cointaining {2d4x100} coins',
  'a _treasure.signOfOffice_ worth at least {3d4x100} coins',
  'a large _treasure.artItem_ worth {4d4x100} coins',
  'a unique item worth at least {5d4x100} coins',
  'everything needed to learn a new spell, and _ROLLAGAIN_',
  'a _treasure.portal_, and _ROLLAGAIN_',
  'something relating to one of the characters, and _ROLLAGAIN_',
  'a hoard! {1d10x1000} coins, and {1d10x10} gems worth {2d6x100} coins each'
];

const utilityItem = [
  'a key', 'a lockpick', 'a potion', 'some food', 'some clothing', 'a cloak',
  'a decanter', 'a cup', 'a small cage', 'a small empty coffer', 'an empty box',
  'a musical instrument', 'a tool', 'a book', 'a scroll', 'a weapon', 'a staff',
  'a wand', 'a vase', 'a key', 'some good food', 'some clothes', 'An old book',
  'a piece of armor', 'a shield', 'a helm', 'a mirror', 'a small mirror',
  'an hourglass', 'a pet', 'a mount', 'a small pet', 'a device',
  'a small device', 'a construct'
];

const artItem = [
  'trinket', 'charm', 'painting', 'piece of pottery', 'ring', 'pair of gloves',
  'carpet', 'tapestry', 'statuette', 'idol', 'flag', 'banner', 'bracelet',
  'armband', 'necklace', 'amulet', 'belt', 'harness', 'hat', 'mask', 'orb',
  'sigil', 'rod', 'crown', 'scepter'
];

const gem = ['diamond', 'ruby', 'sapphire', 'emerald', 'opal', 'pearl'];
const clue = ['map', 'note'];
const portal = ['portal', 'secret path', 'magical portal', 'hidden pathway'];
const signOfOffice = ['crown', 'banner', 'signet ring', 'sign of office'];

const magicItem = {
  table: [{
    range: 8,
    table: utilityItem
  }, {
    range: 12,
    table: artItem
  }],
  template: '_AAN_ _RESULT_ of _details.abilityNoun_'
};

module.exports = {
  treasure,
  utilityItem,
  artItem,
  clue,
  portal,
  signOfOffice,
  gem,
  magicItem,
};
