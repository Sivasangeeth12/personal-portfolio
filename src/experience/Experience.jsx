import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I have</h5>
    <h2>My Skills</h2>

    <div className='container experience_container'>

    <div className="experience_backend">
      <h3>Programming Languages</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>C / C++</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          
          </article>
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
           
          </article>
         
          
        </div>
      </div>



      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
      
          </article>
          {/* <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
           
          </article> */}
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>React JS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          
        </div>
      </div>
      <div className="experience_backend">
      <h3>Backend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          
          </article>
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>Express JS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>Mongo DB</h4>
              <small className='text-light'>Intermediate</small>
            </div>
           
          </article>
          <article className='experience_details'>
            <FaCheckCircle className='experience_details-icon'/>
            <div>
              <h4>Firebase</h4>
              <small className='text-light'>Intermediate</small>
            </div>
           
          </article>
          
        </div>
      </div>

    </div>
    </section>
  )
}

export default Experience