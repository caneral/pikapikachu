import pokemonApi from '../../../configs/pokemonApi';

export const getAllPokemon = (limit, offset) => {
  return async dispatch => {
    dispatch({
      type: 'SET_LOADING',
      loading: true,
    });
    await pokemonApi.getAllPokemon(limit, offset).then(response => {
      dispatch({
        type: 'GET_ALL_POKEMON',
        data: response.data,
        loading: false,
      });
    });
  };
};

export const searchPokemons = searchTerm => {
  return async dispatch => {
    dispatch({
      type: 'SET_LOADING',
      loading: true,
    });
    await pokemonApi.searchPokemons().then(response => {
      dispatch({
        type: 'SEARCH_POKEMONS',
        data: response.data,
        searchTerm: searchTerm.toLowerCase(),
        loading: false,
      });
    });
  };
};
