import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
const Contact = () => {
  return (
    <section id='contact'>
      <h3>Get in touch</h3>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>sangeeth@gmail.com</h5>
            <a href="mailto:sangeeth@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Whatsapp</h4>
            <h5>sangeeth@gmail.com</h5>
            <a href="mailto:sangeeth@gmail.com">Send a message</a>

          </article>

        </div>
      </div>
    </section>
  )
}

export default Contact