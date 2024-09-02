import { projectElements } from "./ProjectElements";
import { Row, Col } from 'react-bootstrap';
import '../css/Default.css'
import '../css/Projects.css'


function Projects() {
    return (
        <div className="projects" id="projects">
            <h1> Projects</h1>
            <Row>
                {projectElements.map((project, index) => {
                    return (
                        <Col xs={12} md={6} xl={4} key={index}>
                            <div className='proj-imgbox'>
                                <img src={project.img} alt={project.title} />
                                <div className='proj-text'>
                                    <h2>{project.title}</h2>
                                    <h3>{project.skills}</h3>
                                    {/* <p>{discription}</p> */}
                                    <a href={project.github} target="blank">Github</a>
                                    <a href={project.demo} target="blank">Demo</a>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export { Projects };

// Col
// xs: < 576 pixels. -> mobile(360-414)
// sm: ≥ 576 pixels.
// md: ≥ 768 pixels. -> tablet(768-1024)
// lg: ≥ 992 pixels. 
// xl: ≥ 1200 pixels. -> laptop(1366-1440), desktop(1440-1920)