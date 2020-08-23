import React from 'react'

import { aboutMe, contact } from './text'

import profilePic from '../../assets/images/headshot.jpg'
import ScrollDown2 from '../ScrollDown2'


const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="Jay Swanson" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>{aboutMe}</p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <div>{contact.name}</div>
              <div>{contact.address}</div>
              <div>{contact.email}</div>
            </p>
          </div>
              <div className="columns download">
                <a href="/resume" className="button">
                  View Resume
                </a>
              </div>
            </div>
          </div>
      <ScrollDown2 />
    </div>
  </section>
  
)

export default About
