const initialState = {
  data: [],
  loading: false,
  searchData: [],
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
    case 'SEARCH_POKEMONS':
      if (action.searchTerm) {
        console.log(action.data.results);
        const data = action.data.results.filter(item => {
          const startCondition = item.name
            .toLowerCase()
            .startsWith(action.searchTerm);
          const includeCondition = item.name
            .toLowerCase()
            .includes(action.searchTerm);
          if (startCondition) {
            return startCondition;
          } else if (!startCondition && includeCondition) {
            return includeCondition;
          } else {
            null;
          }
        });
        return {...state, searchData: data, loading: action.loading};
      }
    case 'SET_LOADING':
      return {...state, loading: action.loading};

    default:
      return {...state};
  }
};

export default pokemons;
