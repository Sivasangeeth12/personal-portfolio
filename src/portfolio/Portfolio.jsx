import React from 'react'
import IMG1 from '../assests/sih_dustbin_png.png'
import IMG2 from '../assests/portfolio_proj_image_medical.png'
import IMG3 from '../assests/dineIn png.png'

import '../portfolio/portfolio.css'
import {useState} from 'react'
const data =[
  {
    id : 1,
    image : IMG1,
    title : "Smart Bin for MetroCities",
    github : "https://github.com/Sivasangeeth12/dustPin_mapTracker",
    description : "Project builted for SIH2023",
    demo : "as"
  },
  {
    id : 2,
    image : IMG2,
    title : "Medical Billing System",
    github : "https://github.com/Sivasangeeth12/hospital-management",
    description : "A admin side project to maintain the upcoming and availability of products.",
    demo : "as"
  },
  {
    id : 3,
    image : IMG3,
    title : "Food Ordering Site",
    github : "https://github.com/Sivasangeeth12/DineIn_Ordering_System",
    description : "Console application to order the food items according to the time basis.",
    demo : "as"
  },
]

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, github, demo }) => (
          <article
            key={id}
            className="portfolio__item"
            onMouseEnter={() => setHoveredProject(id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            {hoveredProject === id && <p className="portfolio__item-description">{description}</p>}
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{marginTop :'15px'}}
              >
                Github
              </a>
             {/* {demo && (
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
             )} */  }
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio