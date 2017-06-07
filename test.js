'use strict';

/* eslint-env node */

const gen = require('./src/perilous-generator/generator');

console.log('Places/Locations:\n----------');
console.log(gen.place.generate());
console.log(gen.place.generate());
console.log(gen.place.generate());

console.log('\nRegions:\n----------');
console.log(gen.region.generate());
console.log(gen.region.generate());
console.log(gen.region.generate());

console.log('\nTreasure:\n----------');
console.log(gen.treasure.generate());
console.log(gen.treasure.generate({
  damageDie: '2d10'
}));
console.log(gen.treasure.generate({
  damageDie: '1d8',
  hoarder: true
}));
console.log(gen.treasure.generate({
  damageDie: 'd12',
  farFromHome: true,
  hoarder: true,
  lord: true,
  ancient: true
}));
