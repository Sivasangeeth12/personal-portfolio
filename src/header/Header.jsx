import React from 'react'
import Button from './Button'
import PHOTO from '../assests/myimage.png';
import HeaderSocials from './HeaderSocials';
import './header.css';
const Header = () => {
  return (
    <header>
    <div className='container header__container'>
        
        <h5>Hello I'm</h5>
        <h1>Sivasangeeth</h1>
        <h5 className='text-light'>Emerging Engineer</h5>
        <Button />
        <HeaderSocials/>
         <div className="img">
            <img src={PHOTO} alt="ME" />
        </div>
        <a href="#footer" className='scroll_down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header