import React from 'react'

// Style
import "../styles/Hero.css"

// Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn"
// import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"

const Hero = () => {
  return (
    <div className="hero-container">
      <p className="holder" id="top" style={{
            display:"block",
            position:"relative",
            visibility:"hidden", 
            top: "-50px" 
            }}></p>
      <p className="greeting">Hey, hi, and hello!</p>
      <h2 className="greeting">I'm Daniel Victory.</h2>
      <div className="headshot">
        <img src="https://i.imgur.com/ktTSEu2.jpg" alt="headshot of Daniel Victory" />
      </div>
      <div className="hero-info">
          <h2 className="lead-statement">Software Engineer. Chemical Engineer. Potential Comedian.</h2>
          <div className="statement-container">
            <p className="statements">Equally comfortable in front of a crowd or behind a computer, I bring years of acting, comedy, and chemical engineering to full-stack development.</p>
            <p className="statements">As a software engineer, I want to fix the frustrations I had as a simple user: make it work, make the work transparent, make the work look good.</p>
            <p className="statements">As a colleague, I continually strive to create a relaxed and safe atmosphere to help learn and mentor, cheerfully and easily.</p>
            <p className="statements">And as a person, I want to make a positive impact in the lives of anyone who touches my work as a user or collaborator.</p>
          </div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/daniel-victory/"><LinkedInIcon /></a>
          <a href="https://github.com/danielvictory"><GitHubIcon /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero