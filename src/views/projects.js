import React, { useState,} from 'react'
import '../style.scss'
import { useParams } from "react-router-dom"
import Data from "../data/projects.data.json"
import Project from '../components/projects/project'
import ProjectNavButtons from '../components/projects/projectNavButton/projectNavButtons'

const Projects = () => {
    let params = useParams()

    const [projectIndex ,setProjectIndex] = useState(parseInt(params.projectIndex))
    const numProjects = Data.projectObjects.length

    const currentProject = Data.projectObjects[projectIndex - 1]  // cuz it's 1-indexed

    return (
        <div className="main-container-top animate__animated animate__fadeIn">
            <div className="projects-container">
                <h3> {projectIndex} / {numProjects} </h3>
                <ProjectNavButtons
                    projectIndex={projectIndex}
                    setProjectIndex={setProjectIndex}
                    numProjects={numProjects}
                />
                <Project
                    name={currentProject.name}
                    description={currentProject.description}
                    link={currentProject.link}
                    tags={currentProject.tags}
                />
            </div>
        </div>
    )
}

export default Projects
