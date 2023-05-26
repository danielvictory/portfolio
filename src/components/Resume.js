import React from 'react'

const Resume = () => {
  return (
    <div>
        <holder id="resume" style={{
            display:"block",
            position:"relative",
            visibility:"hidden", 
            top: "-50px" 
            }}></holder>
        <h1>Resume</h1>
        <iframe title="Daniel-Victory-embedded-resume" src="https://drive.google.com/file/d/1volCxa3eOs-gllZnSJSkwdaKPoUn_8qv/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>

  )
}

export default Resume