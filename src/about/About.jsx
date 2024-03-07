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
          As a passionate web developer with a keen interest in learning and adapting to new technologies, 
          my career objective is to leverage my skills and creativity to contribute effectively to innovative
           web projects. I am committed to continuous learning and improvement, striving to stay updated with
            the latest trends and advancements in the field. Seeking opportunities to
             apply my knowledge and skills in a dynamic and challenging environment, where I can make meaningful 
             contributions and grow both personally and professionally.
          </p>
          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About