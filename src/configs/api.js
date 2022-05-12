import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const POKEMON_FRONT_DEFAULT_PATH =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/';
