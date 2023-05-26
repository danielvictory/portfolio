import React from 'react'

import '../styles/Projects.css'

import ProjectCard from './ProjectCard';
import {projectArray} from '../helpers/ProjectArray'

const Projects = () => {
  return (
    <div className="projects">
        <holder id="projects" style={{
            display:"block",
            position:"relative",
            visibility:"hidden", 
            top: "-50px" 
            }}></holder>
        <h1 style={{textAlign:"center", color:"#dfbe44", padding:"10px", margin:"0"}}>Personal Portfolio</h1>
        <div className="projects-container">
            {projectArray.map((project) => {
                return (
                    <ProjectCard 
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