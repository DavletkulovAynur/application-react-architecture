import React from 'react'
import './Button.scss'

function Button(props) {
  return (
      <div className="Button">{props.name}</div>
  );
}

export default Button
