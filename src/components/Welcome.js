import { Container } from "react-bootstrap";
import '../css/Default.css'
import '../css/Welcome.css'

function Welcome() {
    return (
        <Container>
        <div className="welcome">
            <h1>Welcome</h1>
            <p>Hi, I'm Misato Seki, originally from Japan. I'm currently an IT student at Centria University of Applied Sciences, with a passion for front-end and back-end technologies as well as UI/UX design. Welcome to my portfolio website, where you can explore my skills, projects, and experiences in web and software development.</p>
        </div>
        </Container>
    )
}

export { Welcome };