import { atom } from 'recoil';

export const pokemonAtom = atom({
  key: 'pokemonAtom',
  default: {
    name: '',
    sprites: { front_default: 'aaaa' },
    types: [{ type: { type: { name: '' } } }],
    abilities: [{ ability: { ability: { name: '' } } }],
  },
});

export const pokemonModalAtom = atom({
  key: 'pokemonModalAtom',
  default: false,
});

export const searchFilter = atom({
  key: 'searchFilterAtom',
  default: '',
});
