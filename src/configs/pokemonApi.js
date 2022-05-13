import { api } from "./api";

const pokemonApi = {
  getAllPokemon: (limit, offset) => {
    const url = 'pokemon';
    return api.get(url, {params: {limit:limit, offset:offset}});
  },
};

export default pokemonApi;
