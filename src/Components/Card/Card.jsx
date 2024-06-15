import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card custom-card">
    <div className="icon-container">
      <i className={props.icon}></i>
    </div>
    <h5 style={{fontWeight:'700'}} className="card-title">{props.htext}</h5>
    <p className="card-text">{props.para}</p>
  </div>
  )
}

export default Card