

const Project = ({ title, description, tech, repoLink, deployedLink }) => {
    
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Tech used: {tech}</p>
            <button>Deployed Link
                {/* deployedLink */}
            </button>
            <button>Repository Link</button>
        </div> 
    )
}

export default Project;