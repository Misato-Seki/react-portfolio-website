import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import TrackVisibility from "react-on-screen";

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
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeInUp" : ""} id="skills">
                        <h2>Front-End</h2>
                        <Carousel responsive={responsive} className="skills-slider">
                            <li>
                                <h3>HTML&CSS</h3>
                                <span className="bar"><span className="html-css">90%</span></span>
                            </li>
                            <li>
                                <h3>JavaScript</h3>
                                <span className="bar"><span className="javascript">85%</span></span>
                            </li>
                            <li>
                                <h3>React</h3>
                                <span className="bar"><span className="react" style={{ width: '75%' }}>75%</span></span>
                            </li>
                            <li>
                                <h3>Node.js</h3>
                                <span className="bar"><span className="node-js" style={{ width: '70%' }}>70%</span></span>
                            </li>
                            <li>
                                <h3>Responsive Design</h3>
                                <span className="bar"><span className="responsive" style={{ width: '80%' }}>80%</span></span>
                            </li>
                            <li>
                                <h3>Restful APIs</h3>
                                <span className="bar"><span className="api" style={{ width: '70%' }}>70%</span></span>
                            </li>
                            <li>
                                <h3>MySQL</h3>
                                <span className="bar"><span className="sql" style={{ width: '50%' }}>50%</span></span>
                            </li>
                        </Carousel>
                        <h2>Back-End</h2>
                        <Carousel responsive={responsive} className="skills-slider">
                            <li>
                                <h3>C#</h3>
                                <span className="bar"><span className="csharp" style={{ width: '50%' }}>50%</span></span>
                            </li>
                            <li>
                                <h3>Java</h3>
                                <span className="bar"><span className="java" style={{ width: '50%' }}>50%</span></span>
                            </li>
                            <li>
                                <h3>Python</h3>
                                <span className="bar"><span className="python" style={{ width: '70%' }}>70%</span></span>
                            </li>
                            <li>
                                <h3>Data Structures & Algorithms</h3>
                                <span className="bar"><span className="ds-algo" style={{ width: '50%' }}>50%</span></span>
                            </li>
                            <li>
                                <h3>Linux</h3>
                                <span className="bar"><span className="linux" style={{ width: '50%' }}>50%</span></span>
                            </li>
                            <li>
                                <h3>Git</h3>
                                <span className="bar"><span className="git" style={{ width: '75%' }}>75%</span></span>
                            </li>
                        </Carousel>
                    </div>
                }
            </TrackVisibility>
        </Container>
    )
}

export { Skills };