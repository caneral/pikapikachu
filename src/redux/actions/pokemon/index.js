import pokemonApi from '../../../configs/pokemonApi';

export const getAllPokemon = () => {
  return async dispatch => {
    await pokemonApi.getAllPokemon().then(response => {
      dispatch({
        type: 'GET_ALL_POKEMON',
        data: response.data,
      });
    });
  };
};
