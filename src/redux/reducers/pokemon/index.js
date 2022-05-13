const initialState = {
  data: [],
  loading: false,
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_POKEMON':
      if (state.data?.length === 0) {
        return {...state, data: action.data.results, loading: action.loading};
      } else {
        const newData = state.data.concat(action.data?.results);
        return {...state, data: newData, loading: action.loading};
      }
    case 'SET_LOADING':
      return {...state, loading: action.loading};

    default:
      return {...state};
  }
};

export default pokemons;
