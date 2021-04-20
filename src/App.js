import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import persistedStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import PokemonList from './pages/PokemonList'
import Detail from './pages/PokemonDetail'

function App () {
  const { store, persistor } = persistedStore()
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route exact path="/detail/:name" component={Detail} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
