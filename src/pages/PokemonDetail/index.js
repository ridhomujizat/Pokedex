import React, { Component } from 'react'

import './index.css'
import PokeLogo from '../../assets/images/subtract.png'
import Back from '../../assets/images/back.png'
import Love from '../../assets/images/love.png'
import color from '../../helper/color'

import { connect } from 'react-redux'
import { getDetail } from '../../redux/action/getPokemon'

import About from '../../component/About'

class PokemonDetail extends Component {
  state = {
    tab: 'about'
  }
  componentDidMount () {
    const { params } = this.props.match
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`
    this.props.getDetail(url)
  }

  tabContent (state) {
    if (this.state.tab === 'about') {
      return (
        <About
          species={state.species.name}
          height={state.height}
          weight={state.weight}
          abilities={state.abilities.map(item => item.ability.name).join(', ')}
        />
      )
    }
  }
  render () {
    const detail = this.props.pokemon.detail
    return (
      <>
        <section id="Detail" style={{ background: color(detail.types.map(item => item.type.name)) }}>
          <div className="flex column detail-page">
            <div className="container">
              <div className="heading">
                <img src={Back} alt="back icon" className="back" onClick={() => { this.props.history.goBack() }} />
                <img src={Love} alt="love icon" className="love" />
              </div>
              <h1 className="title detail-name">{detail.name}</h1>
              <h4 className="id-detail">#{detail.id}</h4>
              {detail.types.map((item, index) => {
                return (
                  <div className="type" key={String(index)}>
                    <p className="text-type">{item.type.name}</p>
                  </div>
                )
              })}
            </div>

            <div className="detail-image">
              <img src={detail.sprites.other.dream_world.front_default} alt="Pokemon" className="detail-image-pokemon" />
            </div>
            <div className="slider">
              <div className="tab">
                <p className="tab-item active">about</p>
                <p className="tab-item">Base State</p>
                <p className="tab-item">Evolution</p>
                <p className="tab-item">Moves</p>
              </div>
              <div className="content">
                {detail.weight && this.tabContent(detail)}
              </div>
            </div>
          </div>
          <img src={PokeLogo} alt="pokemon-logo" className="pokemon-logo detail-overlay" />
        </section>
      </>
    )
  }
}


const mapStateToProps = state => ({
  pokemon: state.pokemon
})

const mapDispatchToProps = { getDetail }

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)