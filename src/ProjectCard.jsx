import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (
        
        <div key={project.id} className="overflow-hidden">
            <img src={project.image} className="block h-auto w-full rounded-full" style={{ height: '180px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '80px' }} >
                <div className="font-mono text-xl text-center text-grey-lighter mb-2">{project.name}</div>
                <p className="text-grey-lighter text-center text-base">
                    {project.description}
                </p>
            </div>

            <div className="btn-wrapper">
                <a href={project.website} className="btn">Website</a>
                <a href={project.github} className="btn">GitHub</a>
            </div>
        </div>
    )
}

export default ProjectCard