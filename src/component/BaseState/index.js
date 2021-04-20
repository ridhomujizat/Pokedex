import React from 'react'
import './index.css'

export default function BaseState (props) {
  return (
    <div className='base-state'>
      <table className="tabel">
        {props.state.map(item => {
          return (
            <tr>
              <th className="sub">{item.stat.name}</th>
              <td>
                <div className="bar" style={{ background: item.effort === 0 ? '#48D0B0' : '#FB6C6C', width: `${item.base_stat}%` }} />                </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
