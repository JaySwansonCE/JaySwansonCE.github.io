import React from 'react'
import SocialLinks from '../social-links'
import { bannerTitle, bannerTextLines } from './text'

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">{bannerTitle}</h1>
      <h3>
        <div>
          {bannerTextLines[0].text}
        </div>
        <div>
          {bannerTextLines[1].text}
        </div>
        <div>
          {bannerTextLines[2].text}
        </div>
        <div>
          {bannerTextLines[3].text}
        </div>
        {/* {bannerTextLines.map(lines => (
        <li key={lines.line}>
          <em>{bannerTextLines.text}</em>
        </li>
        ))} */}
        {/* {language.map(language => (
            <li key={language.name}>
              <span
                className="bar-expand"
                style={{ width: language.value + '%' }}
              />
              <em>{language.name}</em>
            </li>
            ))} */}
        {/* <div>{bannerText}</div> */}
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
)

export default Banner
