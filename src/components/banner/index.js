import React from 'react'
import SocialLinks from '../social-links'
import { bannerTitle, bannerTitles } from './text'

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">{bannerTitle}</h1>
      <h3>
      {bannerTitles.map(title => (
        <ul className="bannerList" key={title.text}>
          <em>{title.text}</em>
        </ul>))}
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
)

export default Banner
