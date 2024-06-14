import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
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
                <h1><span className="wrap">{text}</span></h1>
            </Container>
        </section>
    )
}

export { Hero };