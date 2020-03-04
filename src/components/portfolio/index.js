import React from 'react'
import { FaPlus, FaTag } from 'react-icons/lib/fa'

import completeProjects from './text'
import currentProjects from './currentProjects'

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Some of my completed projects</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          {completeProjects.map(project => (
            <div className="columns portfolio-item" key={project.title}>
              <div className="item-wrap">
                <a href={project.link} target="_blank">
                  <img alt="" src={project.image} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>
                        {project.title}
                        <span className="pull-right">
                          <FaPlus />
                        </span>
                      </h5>
                      <p>{project.text}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Some of my current projects</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          {currentProjects.map(project2 => (
            <div className="columns portfolio-item" key={project2.title}>
              <div className="item-wrap">
                <a href={project2.link} target="_blank">
                  <img alt="" src={project2.image} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>
                        {project2.title}
                        <span className="pull-right">
                          <FaPlus />
                        </span>
                      </h5>
                      <p>{project2.text}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Portfolio
