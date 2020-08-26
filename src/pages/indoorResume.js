import React from 'react'
import indoorResume from '../assets/resumes/indoorResume.pdf'
import '../assets/css/main.css'

const IndoorResume = () => (
    <iframe src={indoorResume} className="pdfView" width="100%" height="600%"></iframe>
    )

export default IndoorResume
