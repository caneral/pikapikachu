const initialState = {
  data: [],
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_POKEMON':
      return {...state, data: action.data};

    default:
      return {...state};
  }
};

export default pokemons;
