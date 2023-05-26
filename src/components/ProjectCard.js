import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.image} alt={props.name + " image"} />
        <div className="card-info">
          <h1>{props.name}</h1>
          <p>{props.tech}</p>
          
          <p>{props.desc}</p>
          <div className="project-card-links">
              <a href={props.ghLink}>Github</a>
              <a href={props.liveLink}>Deployed</a>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard