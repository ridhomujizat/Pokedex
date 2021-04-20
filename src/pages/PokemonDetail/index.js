import React, { Component } from 'react'

import './index.css'
import PokeLogo from '../../assets/images/subtract.png'
import Back from '../../assets/images/back.png'
import Love from '../../assets/images/love.png'
import LoveFull from '../../assets/images/loveFull.png'
import color from '../../helper/color'

import { connect } from 'react-redux'
import { getDetail, addMyPokemon, remove } from '../../redux/action/getPokemon'

import About from '../../component/About'
import BaseState from '../../component/BaseState'

class PokemonDetail extends Component {
  state = {
    tab: 'about',
    isHave: false
  }
  async componentDidMount () {
    const { params } = this.props.match
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`
    await this.props.getDetail(url)

    const { detail } = await this.props.pokemon
    const { listPokemonId } = this.props.myPokemon

    if (listPokemonId.includes(detail.id)) {
      this.setState({ isHave: true })
    }
  }

  addPokemon () {
    const { detail } = this.props.pokemon
    const { isHave } = this.state
    if (isHave) {
      this.setState({ isHave: false })
      return this.props.remove(detail)
    }
    this.setState({ isHave: true })
    return this.props.addMyPokemon(detail)
  }

  changeTab (value) {
    this.setState({ tab: value })
  }

  tabContent (state) {
    const { tab } = this.state
    if (tab === 'about') {
      return (
        <About
          species={state.species.name}
          height={state.height}
          weight={state.weight}
          abilities={state.abilities.map(item => item.ability.name).join(', ')}
        />
      )
    } else if (tab === 'state') {
      return (
        <BaseState
          state={state.stats}
        />
      )
    }
  }
  render () {
    const detail = this.props.pokemon.detail
    const { tab, isHave } = this.state
    return (
      <>
        <section id="Detail" style={{ background: color(detail.types.map(item => item.type.name)) }}>
          <div className="flex column detail-page">
            <div className="container">
              <div className="heading">
                <img src={Back} alt="back icon" className="back" onClick={() => { this.props.history.goBack() }} />
                <img src={isHave ? LoveFull : Love} alt="love icon" className="love" onClick={() => { this.addPokemon() }} />
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
                <p className={`tab-item ${tab === 'about' ? 'active' : ''}`} onClick={() => this.changeTab('about')} >about</p>
                <p className={`tab-item ${tab === 'state' ? 'active' : ''}`} onClick={() => this.changeTab('state')} >Base State</p>
                <p className={`tab-item ${tab === 'evolution' ? 'active' : ''}`} onClick={() => this.changeTab('evolution')} >Evolution</p>
                <p className={`tab-item ${tab === 'moves' ? 'active' : ''}`} onClick={() => this.changeTab('moves')} >Moves</p>
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
  myPokemon: state.myPokemon,
  pokemon: state.pokemon
})

const mapDispatchToProps = { getDetail, addMyPokemon, remove }

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)