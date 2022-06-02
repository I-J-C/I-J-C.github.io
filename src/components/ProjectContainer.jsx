import Project from "./Project";


const ProjectContainer = () => {
    const projects = [
        {
            title: "BlackJack",
            description: "A Blackjack React.js app using the Deck of Cards API",
            tech: "React.js, Axios, HTML/CSS",
            repoLink: "https://github.com/I-J-C/blackjack",
            deployedLink: "https://ijc-blackjack.surge.sh/"
        },
        {
            title: "Minesweeper",
            description: "A normal minesweeper web app functional on mobile",
            tech: "HTML/CSS, Javascript",
            repoLink: "https://github.com/I-J-C/minesweeper",
            deployedLink: "https://i-j-c.github.io/minesweeper/"
        },
        {
            title: "Unit Converter",
            description: "Android App that converts units. Takes a base unit for each category (Distance, Time, Volume, etc) and converts to other units in that category.",
            tech: "XML, Java, Android Studio",
            repoLink: "https://github.com/I-J-C/Master-Unit-Converter",
            deployedLink: "N/A"
        }
    ]
    
    // {
    //     title: "",
    //     description: "",
    //     tech: "",
    //     repoLink: "",
    //     deployedLink: ""
    // }
    return (
        <div className="projects">
            <h2 className="projects-title">Notable Projects</h2>
            {projects?.map((project, index) => (
                <Project class="project"
                title={project.title}
                description={project.description}
                tech={project.tech}
                repoLink={project.repoLink}
                deployedLink={project.deployedLink}
                key={index}
                />
            ))}
        </div>
    )
}

export default ProjectContainer;