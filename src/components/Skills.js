import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4
        }
      };
    return (
        <Container>
            <div className="skills" id="skills">
                <h1>Skills</h1>
                    <Row>
                        <Col xs={12} md={6} xl={6} className="skills-slider">
                        <Carousel responsive={responsive}>
                                <h2>Front-End</h2>
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
                                    <span className="bar"><span className="react">75%</span></span>
                                </li>
                                <li>
                                    <h3>Node.js</h3>
                                    <span className="bar"><span className="node-js"></span></span>
                                </li>
                                <li>
                                    <h3>Responsive Design</h3>
                                    <span className="bar"><span className="responsive"></span></span>
                                </li>
                                <li>
                                    <h3>Restful APIs</h3>
                                    <span className="bar"><span className="api"></span></span>
                                </li>
                                <li>
                                    <h3>MySQL</h3>
                                    <span className="bar"><span className=""></span></span>
                                </li>
                        </Carousel>
                        </Col>
                        <Col xs={12} md={6} xl={6} className="skills-slider">
                            <h2>Back-End</h2>
                            <li>
                                <h3>C#</h3>
                                <span className="bar"><span className="csharp"></span></span>
                            </li>
                            <li>
                                <h3>Java</h3>
                                <span className="bar"><span className="java"></span></span>
                            </li>
                            <li>
                                <h3>Python</h3>
                                <span className="bar"><span className="python"></span></span>
                            </li>
                            <li>
                                <h3>Data Structures & Algorithms</h3>
                                <span className="bar"><span className="ds-algo"></span></span>
                            </li>
                            <li>
                                <h3>Linux</h3>
                                <span className="bar"><span className="linux"></span></span>
                                </li>
                            <li>
                                <h3>Git</h3>
                                <span className="bar"><span className="git"></span></span>
                            </li>
                        </Col>
                    </Row>

            </div>
        </Container>
    )
}

export { Skills };