import React, { Component } from 'react'

import './index.css'
import PokeLogo from '../../assets/images/pokelogo.png'

import CardPokemon from '../../component/CardPokemon'

import { connect } from 'react-redux'
import { getlist } from '../../redux/action/getPokemon'

class PokemonList extends Component {
  componentDidMount () {
    this.props.getlist()
  }

  nextData () {
    const { next } = this.props.pokemon.pokemonList
    this.props.getlist(next)
  }

  goDetail (name) {
    this.props.history.push(`/detail/${name}`)
  }

  render () {
    const pokemonList = this.props.pokemon.pokemonList.results
    const { next } = this.props.pokemon.pokemonList
    return (
      <>
        <section id="PokemontList">
          <div className="container">
            <div className="heading">
              <h1 className="title">
                Pokedox
              </h1>
            </div>
            <div className="list-pokemon">
              {pokemonList.map(item => {
                return (
                  <CardPokemon
                    onClick={() => this.goDetail(item.name)}
                    key={String(item.id)}
                    id={item.id}
                    image={item.sprites.other.dream_world.front_default}
                    types={item.types.map(item => item.type.name)}
                    name={item.forms[0].name}
                  />
                )
              })}
            </div>
            {next && (
              <div className="btn-load-more" onClick={() => this.nextData()}>
                <p>load more</p>
              </div>
            )}
          </div>
        </section>
        <img src={PokeLogo} alt="pokemon-logo" className="pokemon-logo overlay-list-logo" />
      </>
    )
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon
})

const mapDispatchToProps = { getlist }

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)