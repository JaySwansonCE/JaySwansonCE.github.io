import React from 'react'
import text from './text'
import bannerTitles from '../banner/text'

console.log(bannerTitles.bannerTitles)

const Footer = () => (
  <div id="resume-header">
    <div className="row">
      <div className="twelve columns text-center">
        <div className="title">{text.name}</div>
        {bannerTitles.bannerTitles.map(title => (
          <div className="resumeHeaderTitles">{title.text}</div>
        ))}
        <div>{text.location}</div>
        <a href={'https://'+text.website}> {text.website} </a>
      </div>
    </div>
  </div>
)

export default Footer
