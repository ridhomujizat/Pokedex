const initalState = {
  fristFetch: true,
  pokemonList: {
    results: [],
    count: 0,
    next: null,
    previous: null
  },
  detail: {
    name: null,
    types: [],
    sprites: {
      other: {
        dream_world: {
          front_default: 'none'
        }
      }
    }
  },
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
        },
        fristFetch: false
      }
    }
    case 'GET_DETAIL_POKEMON': {
      return {
        ...state,
        detail: action.payload
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