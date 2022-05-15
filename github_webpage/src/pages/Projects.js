import React from 'react'

import './Projects.css'
import Project from '../components/Project'
import { projectData } from '../Data/projectData'

const Projects = () => {

    let projectsContent = projectData.map((project) => {
        //console.log(`project name: ${project.name}`);
        return <Project passedProject={project}/>

    })

    console.log(projectsContent.toString())

    return (
        <div className='projects-content'>
            {projectsContent}
        </div>
    )
}

export default Projects