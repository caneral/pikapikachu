import { api } from "./api";

const pokemonApi = {
  getAllPokemon: () => {
    const url = 'pokemon';
    return api.get(url, {params: {}});
  },
};

export default pokemonApi;
