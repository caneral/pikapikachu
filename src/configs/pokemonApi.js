import { api } from "./api";

const pokemonApi = {
  getAllPokemon: (limit, offset) => {
    const url = 'pokemon';
    return api.get(url, {params: {limit:limit, offset:offset}});
  },
  searchPokemons: () => {
    const url = 'pokemon';
    return api.get(url, {params: {limit:50}})
  },
  getPokemon: (id) => {
    const url = `pokemon/${id}`;
    return api.get(url, {params: {}})
  }
};

export default pokemonApi;
