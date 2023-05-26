import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <h1>{props.name}</h1>
        <p>{props.tech}</p>
        <img src={props.image} alt={props.name + " image"} />
        <p>{props.desc}</p>
        <div className="project-card-links">
            <a href={props.ghLink}>Github</a>
            <a href={props.liveLink}>Deployed</a>
        </div>
    </div>
  )
}

export default ProjectCard