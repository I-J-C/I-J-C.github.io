

const Project = ({ title, description, tech, repoLink, deployedLink }) => {
    
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Tech used: {tech}</p>
            <div className="project-buttons">
            <a href={deployedLink} target="_blank" rel="noreferrer">
            <button>Deployed Link</button>
            </a>
            <a href={repoLink} target="_blank" rel="noreferrer">
            <button>Repository Link</button>
            </a>
            </div>
        </div> 
    )
}

export default Project;