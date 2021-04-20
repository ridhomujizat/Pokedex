const initalState = {
  myListPokemon: [],
  listPokemonId: [],
  pokemonDetail: null,
  message: null
}

const pokemonReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_LIST_MYPOKEMON': {
      const results = [...state.myListPokemon, ...action.payload]
      const listPokemonId = [...state.listPokemonId, action.payload[0].id]
      return {
        ...state,
        myListPokemon: results,
        listPokemonId
      }
    }
    case 'REMOVE_MYPOKEMON': {
      const index = state.myListPokemon.findIndex((element) => element.id === action.payload.id)
      if (index >= 0) {
        state.myListPokemon.splice(index, 1);
      }
      const indexId = state.myListPokemon.findIndex((element) => element === action.payload.id)
      if (index >= 0) {
        state.listPokemonId.splice(indexId, 1);
      }
      console.log(index, action.payload)
      console.log(state.myListPokemon)
      return {
        ...state
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