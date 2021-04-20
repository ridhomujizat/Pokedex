import React, { Component } from 'react'

import './index.css'
import PokeLogo from '../../assets/images/pokelogo.png'
import Pocket from '../../assets/images/filter.png'
import back from '../../assets/images/backBlack.png'

import CardPokemon from '../../component/CardPokemon'

import { connect } from 'react-redux'
import { getlist } from '../../redux/action/getPokemon'

class PokemonList extends Component {
  componentDidMount () {
    console.log(this.props.myPokemon)
  }
  goDetail (name) {
    this.props.history.push(`/detail/${name}`)
  }

  render () {
    const { myListPokemon } = this.props.myPokemon
    return (
      <>
        <section id="PokemontList">
          <div className="container">
            <div className="heading">
              <img src={back} alt="back icon" onClick={() => this.props.history.goBack()} className="back" />
              <h1 className="title">
                My List Pokemon
              </h1>
            </div>
            <div className="list-pokemon">
              {myListPokemon.length === 0 && <p>Get your pokemon</p>}
              {myListPokemon.map(item => {
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
          </div>
          <div className="btn-mylist">
            <img src={Pocket} alt="pocket logo" className="img-btn-mylist" />
          </div>
        </section>
        <img src={PokeLogo} alt="pokemon-logo" className="pokemon-logo overlay-list-logo" />
      </>
    )
  }
}

const mapStateToProps = state => ({
  myPokemon: state.myPokemon
})

const mapDispatchToProps = { getlist }

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)