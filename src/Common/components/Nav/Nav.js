import React from 'react'
import './Nav.scss'
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className='Nav'>
      <div className='links'>
        <div className='link'><Link to='/'>home</Link></div>
        <div className='link'><Link to='/redux'>redux</Link></div>
      </div>
    </nav>
  );
}

export default Nav
