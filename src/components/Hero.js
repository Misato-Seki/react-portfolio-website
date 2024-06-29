import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import heroImg from '../assets/img/hero.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";
import '../css/Default.css'
import '../css/Hero.css'

function Hero() {
    const [text, setText] = useState('');
    let fullText = "Hi, I'm Misato Seki."
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const heroText = setTimeout(() => {
                setText(fullText.substring(0, index + 1));
                setIndex(index + 1);
            }, 200);

            return () => clearTimeout(heroText);
        }
    }, [index])


    return (
        <section className="hero" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xl={7} className="col-text">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1><span className="wrap">{text}</span></h1>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xl={5} className="col-img">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <Image src={heroImg} alt="hero-img" className={isVisible ? "animate__animated animate__fadeIn" : ""} roundedCircle/>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export { Hero };

// Col
// xs: < 576 pixels. -> mobile(360-414)
// sm: ≥ 576 pixels.
// md: ≥ 768 pixels. -> tablet(768-1024)
// lg: ≥ 992 pixels. 
// xl: ≥ 1200 pixels. -> laptop(1366-1440), desktop(1440-1920)