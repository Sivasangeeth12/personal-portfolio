import React from 'react'

import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/sivasangeeth-s-419aa3239/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/Sivasangeeth12" target='_blank'><BsGithub/></a>
        {/* <a href="https://facebook.com" target='_blank'><BsFacebook/></a> */}

    </div>
  )
}

export default HeaderSocials