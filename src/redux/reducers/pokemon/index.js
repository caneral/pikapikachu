const initialState = {
  data: [],
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_POKEMON':
      if (state.data?.length === 0) {
        return {...state, data: action.data.results};
      } else {
        const newData = state.data.concat(action.data?.results);
        return {...state, data: newData};
      }

    default:
      return {...state};
  }
};

export default pokemons;
