const initalState = {
  pokemonList: {
    results: [],
    count: 0,
    next: null,
    previous: null
  },
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
    case 'GET_LIST_POKEMON': {
      return {
        ...state,
        pokemonList: action.payload
      }
    }
    case 'ADD_LIST_POKEMON': {
      const results = [...state.pokemonList.results, ...action.payload.results]
      return {
        ...state,
        pokemonList: {
          results: results,
          count: action.payload.count,
          next: action.payload.next,
          previous: action.payload.previous
        }
      }
    }
    case 'GET_DETAIL_POKEMON': {
      return {
        ...state,
        pokemonList: action.payload
      }
    }
    case 'SET_MESSAGE': {
      return {
        ...state,
        message: action.payload
      }
    }
    case 'CLEAR_DATA': {
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