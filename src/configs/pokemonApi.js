import { api } from "./api";

const pokemonApi = {
  getAllPokemon: (limit, offset) => {
    const url = 'pokemon';
    return api.get(url, {params: {limit:limit, offset:offset}});
  },
  searchPokemons: () => {
    const url = 'pokemon';
    return api.get(url, {params: {limit:50}})
  }
};

export default pokemonApi;
