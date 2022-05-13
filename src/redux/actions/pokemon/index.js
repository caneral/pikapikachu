import pokemonApi from '../../../configs/pokemonApi';

export const getAllPokemon = (limit, offset) => {
  return async dispatch => {
    await pokemonApi.getAllPokemon(limit, offset).then(response => {
      dispatch({
        type: 'GET_ALL_POKEMON',
        data: response.data,
      });
    });
  };
};
