import React from 'react'

import '../assets/css/main.css'

import ResumeHeader from '../components/resume-header'
import Resume from '../components/Resume'

const IndexPage = () => (
  <div className="resumeDiv">
    <ResumeHeader />
    <p className="resumeBackButtonBackground">
      <a href="/indoorResume" className="resumeBackButton">
      Printable INDOOR Resume</a>
    </p>
    <p className="resumeBackButtonBackground">
      <a href="/outdoorResume" className="resumeBackButton">
      Printable OUTDOOR Resume</a>
    </p>
    <p className="resumeBackButtonBackground">
      <a href="/.." className="resumeBackButton">
      BACK </a>
    </p>
    <Resume />
  </div>
)

export default IndexPage
