import React from 'react'
import '../footer/footer.css'

import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">Sangeeth</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Skills</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#contact">Contact</a></li> */}
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sivasangeeth-s-419aa3239/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/Sivasangeeth12" target='_blank'><BsGithub/></a>
        <a href="https://facebook.com" target='_blank'><BsFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Sivasangeeth. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer