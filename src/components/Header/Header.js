import React from 'react'
import './Header.css'

const Header = () => {
    return (
      <div className='header-container'>
        <div className='header-logo'>Logo</div>
        <div className='header-links'>
          <a href={`/`}>Home</a>
          <a href={`/about`}>Portfolio</a>
          <a href={`/contact`}>Contact Us</a>
        </div>
      </div>
    );
}

export default Header