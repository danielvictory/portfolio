import React from 'react'

import '../styles/Projects.css'

import ProjectCard from './ProjectCard';
import {projectArray} from '../helpers/ProjectArray'

const Projects = () => {
  return (
    <div className="projects">
        <p className="holder" id="projects" style={{
            display:"block",
            position:"relative",
            visibility:"hidden", 
            top: "-50px" 
            }}></p>
        <h1 style={{textAlign:"center", color:"#dfbe44", padding:"10px", margin:"0"}}>Personal Portfolio</h1>
        <div className="projects-container">
            {projectArray.map((project, idx) => {
                return (
                    <ProjectCard
                        key= {idx}
                        name={project.name}
                        tech={project.tech}
                        image={project.image}
                        desc={project.desc}
                        ghLink={project.ghLink}
                        liveLink={project.liveLink}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Projects