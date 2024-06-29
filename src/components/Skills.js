import { Container, ProgressBar } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { frontendSkillSet, backendSkillSet } from "./SkillSets";
import '../css/Default.css'
import '../css/Skills.css'

function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Container className="skills" id="skills">
            <h1>Skills</h1>
            <h2>Front-End</h2>
            <Carousel responsive={responsive} className="skills-slider">
                {frontendSkillSet.map((skill) => {
                    return (
                        <li key={skill.key}>
                            <h3>{skill.title}</h3>
                            <ProgressBar now={skill.progress} label={`${skill.progress}%`} />
                        </li>
                    )
                })}
            </Carousel>
            <h2>Back-End</h2>
            <Carousel responsive={responsive} className="skills-slider">
                {backendSkillSet.map((skill) => {
                    return (
                        <li key={skill.key}>
                            <h3>{skill.title}</h3>
                            <ProgressBar now={skill.progress} label={`${skill.progress}%`} />
                        </li>
                    )
                })}
            </Carousel>
        </Container>
    )
}

export { Skills };