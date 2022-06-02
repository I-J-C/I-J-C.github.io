

const Project = ({ title, description, tech, repoLink, deployedLink }) => {
    
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Tech used: {tech}</p>
            <a href={deployedLink} target="_blank" rel="noreferrer">
            <button>Deployed Link
                {/* deployedLink */}
            </button>
            </a>
            <a href={repoLink} target="_blank" rel="noreferrer">
            <button>Repository Link</button>
            </a>
        </div> 
    )
}

export default Project;