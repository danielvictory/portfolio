import React from 'react'

import "../styles/Skills.css"

const Skills = () => {
  return (
    <div id="skills">
        <h1>Languages, Libraries, and Frameworks! Oh My!</h1>
        <div className="skills-card-container">
            <div className="skill-card frontend">
                <h2>Front End</h2>
                <p> HTML, CSS, Javascript, ReactJS, Python (Django), Styled Components, Materialize, MaterialUI</p>
            </div>
            <div className="skill-card backend">
                <h2>Back End</h2>
                <p> Node.js & Express, MongoDB & Mongoose, SQL, PostreSQL, RESTful API </p>
            </div>
            <div className="skill-card generalskills">
                <h2>and more!</h2>
                <p> Deployment (with Heroku, Netlify, Render), Git, Github, VSCode, Agile, Just Being Nice</p>
            </div>
        </div>
    </div>
  )
}

export default Skills