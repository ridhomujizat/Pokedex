import React from 'react'
import propTypes from 'prop-types'
import './index.css'
import logo from '../../assets/images/subtract.png'
import color from '../../helper/color'


export default function CardPokemon (props) {

  return (
    <div className="card-pokemon" style={{ backgroundColor: color(props.types) }} onClick={props.onClick}>
      <p className="id-pokemon">#{props.id}</p>
      <h3 className="name-pokemon-card">
        {props.name}
      </h3>
      {props.types.map((item, index) => {
        return (
          <div className="wrapper-type" key={String(index)}>
            <p >{item}</p>
          </div>
        )
      })}
      <img className="card-img-pokemon" src={props.image} alt="name" />
      <img className="card-logo-overlay" src={logo} alt="logo pokemon" />
    </div>
  )
}

CardPokemon.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
  types: propTypes.array,
  id: propTypes.number,
  onClick: propTypes.func
}