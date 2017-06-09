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

console.log('\nNames:\n----------');
console.log(gen.name.generate());
console.log(gen.name.generate('male'));
console.log(gen.name.generate('female'));
console.log(gen.name.generate('steading'));
console.log(gen.name.generate('mount'));
console.log(gen.name.generate('male', 'Arpad'));
console.log(gen.name.generate('female', 'Oloru'));
console.log(gen.name.generate('steading', 'Valkoina'));
console.log(gen.name.generate('mount', 'Tamanarugan'));
console.log(gen.name.generate('', 'Arpad'));
console.log(gen.name.generate('', 'Oloru'));
console.log(gen.name.generate('', 'Valkoina'));
console.log(gen.name.generate('', 'Tamanarugan'));

console.log('\nDetails:\n----------');
console.log(gen.detail.generate(''));
console.log(gen.detail.generate('ability'));
console.log(gen.detail.generate('activity'));
console.log(gen.detail.generate('adjective'));
console.log(gen.detail.generate('age'));
console.log(gen.detail.generate('alignment'));
console.log(gen.detail.generate('aspect'));
console.log(gen.detail.generate('condition'));
console.log(gen.detail.generate('disposition'));
console.log(gen.detail.generate('element'));
console.log(gen.detail.generate('feature'));
console.log(gen.detail.generate('magic type'));
console.log(gen.detail.generate('number appearing'));
console.log(gen.detail.generate('oddity'));
console.log(gen.detail.generate('orientation'));
console.log(gen.detail.generate('ruination'));
console.log(gen.detail.generate('size'));
console.log(gen.detail.generate('tag'));
console.log(gen.detail.generate('terrain'));
console.log(gen.detail.generate('visibility'));
