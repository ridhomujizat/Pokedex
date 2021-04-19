import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PokemonList from './pages/PokemonList'

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PokemonList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
