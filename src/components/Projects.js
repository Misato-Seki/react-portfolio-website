import { ProjectCard } from "./ProjectCard";
import { Row } from 'react-bootstrap';
import projectImg1 from '../assets/img/project-portfolio.png';
import projectImg2 from '../assets/img/project-news.png';
import projectImg3 from '../assets/img/project-blog.png';
import projectImg4 from '../assets/img/project-flashcard.png';
import TrackVisibility from "react-on-screen";
import 'animate.css';


function Projects() {
    const projects = [
        {
            title: "Porfolio Website",
            skills: "React/React Bootstrap/CSS/Git",
            discription: "This project is my personal portfolio website, designed to showcase my skills, projects, and experiences.",
            github: "https://github.com/Misato-Seki/react-portfolio-website",
            demo: "#",
            img: projectImg1,
        },
        {
            title: "News Website",
            skills: "JavaScript/HTML/CSS/API/Bootstrap",
            discription: "This project is a dynamic news website that aggregates and displays the latest news articles from various sources using an API.",
            github: "https://github.com/Misato-Seki/News-API",
            demo: "https://misato-seki.github.io/News-API/",
            img: projectImg2,
        },
        {
            title: "Blog Website",
            skills: "Node.js/Express.js/EJS/MongoDB/CSS",
            discription: "This project is a dynamic news website that aggregates and displays the latest news articles from various sources using an API.",
            github: "https://github.com/Misato-Seki/Portfolio",
            demo: "#",
            img: projectImg3,
        },
        {
            title: "Flascard App",
            skills: "HTML/CSS/JavaScript",
            discription: "This project is a flashcard app that allows users to add, edit, and delete cards, following a tutorial video found on YouTube.",
            github: "https://github.com/Misato-Seki/FlashCardApp",
            demo: "https://misato-seki.github.io/FlashCardApp/#",
            img: projectImg4,
        },
    ]

    return (
        <div className="projects" id="projects">
            <h1> Projects</h1>
            <TrackVisibility>
                {({ isVisible }) =>
                    <Row className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                }
            </TrackVisibility>
        </div>
    )
}

export { Projects };