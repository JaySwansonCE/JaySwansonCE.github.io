import React from 'react'
import outdoorResume from '../assets/resumes/outdoorResume.pdf'
import '../assets/css/main.css'

const OutdoorResume = () => (
    <iframe src={outdoorResume} className="pdfView" width="100%" height="600%"></iframe>
    )

export default OutdoorResume