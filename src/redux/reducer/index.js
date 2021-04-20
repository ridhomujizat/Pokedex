import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import pokemonReducer from './pokemon'
import myPokemonReducer from './mypokemon'

const pokemonConfig = {
  key: 'myPokemonReducer',
  storage,
  stateReconciler: hardSet
}

const reducer = combineReducers({
  myPokemon: persistReducer(pokemonConfig, myPokemonReducer),
  pokemon: pokemonReducer
})

export default reducer
