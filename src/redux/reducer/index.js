import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import pokemonReducer from './pokemon'

const pokemonConfig = {
  key: 'pokemonReducer',
  storage,
  stateReconciler: hardSet
}

const reducer = combineReducers({
  pokemon: persistReducer(pokemonConfig, pokemonReducer),
})

export default reducer
