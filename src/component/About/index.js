import React from 'react'

import './index.css'

export default function About (props) {
  return (
    <div className="about">
      <div className="vertical ">
        <p className="about sub">
          Species
        </p>
        <p className="about">
          {props.species}
        </p>
      </div>

      <div className="vertical ">
        <p className="about sub">
          Height
        </p>
        <p className="about">
          {props.height}
        </p>
      </div>

      <div className="vertical ">
        <p className="about sub">
          Weight
        </p>
        <p className="about">
          {props.weight}
        </p>
      </div>

      <div className="vertical ">
        <p className="about sub">
          Abilities
        </p>
        <p className="about">
          {props.abilities}
        </p>
      </div>
    </div>
  )
}
