'use strict';

/* eslint-env node */

const gen = require('./src/generator');

['creature', 'danger', 'detail', 'discovery', 'dungeon',
  'name', 'npc', 'place', 'region', 'steading', 'treasure'
].forEach(g => {
  console.log(gen[g].generate());
});

// console.log('Places:\n----------');
// console.log(gen.place.generate());
// console.log(gen.place.generate());
// console.log(gen.place.generate());
//
// console.log('\nRegions:\n----------');
// console.log(gen.region.generate());
// console.log(gen.region.generate());
// console.log(gen.region.generate());
//
// console.log('\nTreasure:\n----------');
// console.log(gen.treasure.generate());
// console.log(gen.treasure.generate({
//   damageDie: '2d10'
// }));
// console.log(gen.treasure.generate({
//   damageDie: '1d8',
//   hoarder: true
// }));
// console.log(gen.treasure.generate({
//   damageDie: 'd12',
//   farFromHome: true,
//   hoarder: true,
//   lord: true,
//   ancient: true
// }));
//
// console.log('\nNames:\n----------');
// console.log(gen.name.generate());
// console.log(gen.name.generate('male'));
// console.log(gen.name.generate('female'));
// console.log(gen.name.generate('steading'));
// console.log(gen.name.generate('mount'));
// console.log(gen.name.generate('male', 'Arpad'));
// console.log(gen.name.generate('female', 'Oloru'));
// console.log(gen.name.generate('steading', 'Valkoina'));
// console.log(gen.name.generate('mount', 'Tamanarugan'));
// console.log(gen.name.generate('', 'Arpad'));
// console.log(gen.name.generate('', 'Oloru'));
// console.log(gen.name.generate('', 'Valkoina'));
// console.log(gen.name.generate('', 'Tamanarugan'));
//
// console.log('\nDetails:\n----------');
// console.log(gen.detail.generate(''));
// console.log('Ability:', gen.detail.generate('ability'));
// console.log('Activity:', gen.detail.generate('activity'));
// console.log('Adjective:', gen.detail.generate('adjective'));
// console.log('Age:', gen.detail.generate('age'));
// console.log('Alignment:', gen.detail.generate('alignment'));
// console.log('Aspect:', gen.detail.generate('aspect'));
// console.log('Condition:', gen.detail.generate('condition'));
// console.log('Disposition:', gen.detail.generate('disposition'));
// console.log('Element:', gen.detail.generate('element'));
// console.log('Feature:', gen.detail.generate('feature'));
// console.log('Magic Type:', gen.detail.generate('magic type'));
// console.log('No. Appearing:', gen.detail.generate('number appearing'));
// console.log('Oddity:', gen.detail.generate('oddity'));
// console.log('Orientation:', gen.detail.generate('orientation'));
// console.log('Ruination:', gen.detail.generate('ruination'));
// console.log('Size:', gen.detail.generate('size'));
// console.log('Tag:', gen.detail.generate('tag'));
// console.log('Terrain:', gen.detail.generate('terrain'));
// console.log('Visibility:', gen.detail.generate('visibility'));
