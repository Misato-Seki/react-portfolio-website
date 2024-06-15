import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import heroImg from '../assets/img/hero.png';
// import TrackVisibility from "react-on-screen";

function Hero() {
    const[text, setText] = useState('');
    let fullText = "Hi, I'm Misato Seki."
    const[index, setIndex] = useState(0);

    useEffect(() => {
        if(index < fullText.length){
            const heroText = setTimeout(() => {
                setText(fullText.substring(0, index + 1));
                setIndex(index + 1);    
            }, 200);

            return () => clearTimeout(heroText);
        }
    },[index])


    return (
        <section className="hero" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1><span className="wrap">{text}</span></h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={heroImg} alt="hero-img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export { Hero };