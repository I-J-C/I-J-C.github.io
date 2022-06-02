import Project from "./Project";
import projects from '../projects';

const ProjectContainer = () => {

    return (
        <div className="projects">
            {projects?.map((project, index) => {
                <Project class="project"
                title={project.title}
                description={project.description}
                tech={project.tech}
                repoLink={project.repoLink}
                deployedLink={project.deployedLink}
                key={index}
                />
            })}
        </div>
    )
}

export default ProjectContainer;