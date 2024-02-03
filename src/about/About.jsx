import React from 'react'
import ME from '../assests/myimage.png'
import { FaAward } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            {/* <article className='about_card'>
              <FaUserAlt className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ yrs working</small>
            </article> */}

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Certifications</h5>
              <small>6 Completed</small>
            </article>

            <article className='about_card'>
              <MdFolderSpecial className='about_icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolorem aliquid quis iure repudiandae corrupti delectus. Natus harum earum nostrum, velit debitis tenetur nihil soluta maxime doloribus autem! Sapiente, quas.

          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About