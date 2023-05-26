import React from 'react'

import "../styles/Resume.css"

import resume from '../assets/Daniel-Victory-Software-Engineer-Resume-2023.pdf'

const Resume = () => {
  return (
    <div className="resume-container">
        <holder id="resume" style={{
            display:"block",
            position:"relative",
            visibility:"hidden", 
            top: "-50px" 
            }}></holder>

            <h1>Resume</h1>
            <div>
                <a href={resume} download="Resume">
                    <button>Download Resume!</button>
                </a>
            </div>
            <br />

        <iframe title="Daniel-Victory-embedded-resume" src="https://drive.google.com/file/d/1volCxa3eOs-gllZnSJSkwdaKPoUn_8qv/preview" width="640" height="480" allow="autoplay"></iframe>
        
    </div>
  )
}

export default Resume