import { ProjectCard } from "./ProjectCard";
import { Row } from 'react-bootstrap';


function Projects() {
    const projects = [
        {
            title: "Porfolio Website",
            skills: "React/React Bootstrap/CSS/Git",
            discription: "This project is my personal portfolio website, designed to showcase my skills, projects, and experiences.",
            github: "https://github.com/Misato-Seki/react-portfolio-website",
            demo: "#",
            img: '../assets/img/project-portfolio.png',
        },
        {
            title: "News Website",
            skills: "JavaScript/HTML/CSS/API/Bootstrap",
            discription: "This project is a dynamic news website that aggregates and displays the latest news articles from various sources using an API.",
            github: "https://github.com/Misato-Seki/News-API",
            demo: "https://misato-seki.github.io/News-API/",
            img: '../assets/img/project-news.png',
        },
        {
            title: "Blog Website",
            skills: "Node.js/Express.js/EJS/MongoDB/CSS",
            discription: "This project is a dynamic news website that aggregates and displays the latest news articles from various sources using an API.",
            github: "https://github.com/Misato-Seki/Portfolio",
            demo: "#",
            img: '../assets/img/project-blog.png'
        },
        {
            title: "Flascard App",
            skills: "HTML/CSS/JavaScript",
            discription: "This project is a flashcard app that allows users to add, edit, and delete cards, following a tutorial video found on YouTube.",
            github: "https://github.com/Misato-Seki/FlashCardApp",
            demo: "https://misato-seki.github.io/FlashCardApp/#",
            img: '../assets/img/project-flashcard.png',
        },
    ]
    return (
        <div className="projects" id="projects">
            <h1> Projects</h1>
            <Row>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                {...project}
                            />

                            // The above code means:
                            // <ProjectCard
                            //     title={project.title}
                            //     description={project.description}
                            //     imgUrl={project.imgUrl}
                            // />

                        )
                    })
                }
            </Row>

        </div>
    )
}

export { Projects };