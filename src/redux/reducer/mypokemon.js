const initalState = {
  myListPokemon: {
    results: [],
    count: 0,
    next: null,
    previous: null
  },

  pokemonDetail: null,
  message: null
}

const pokemonReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_LIST_MYPOKEMON': {
      return {
        ...state,
        myListPokemon: action.payload
      }
    }
    case 'ADD_LIST_MYPOKEMON': {
      const results = [...state.pokemonList.results, ...action.payload.results]
      return {
        ...state,
        myListPokemon: {
          results: results,
          count: action.payload.count,
          next: action.payload.next,
          previous: action.payload.previous
        }
      }
    }
    case 'CLEAR_DATA_MYPOKEMON': {
      return {
        pokemonList: [],
        myListPokemon: [],
        pokemonDetail: null,
        message: null
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default pokemonReducer