import contactImg from '../assets/img/contact.png';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3334433a-dfb1-4089-ab05-396dbbdf5675");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <Row>
                <Col xs={12} lg={6} className='contact-img'>
                    <img src={contactImg} alt='contactImg' />
                </Col>
                <Col xs={12} lg={6}>
                    <form onSubmit={onSubmit} className='contact-form'>
                        <input type="text" name="name" placeholder='Name:' required />
                        <input type="email" name="email" placeholder='Email:' required />
                        <textarea name="message" placeholder='Message:' required></textarea>

                        <Row>
                            <Col>
                                <button type="submit">Submit</button>
                            </Col>
                            <Col className='message'>
                                <span>{result}</span>
                            </Col>
                        </Row>

                    </form>
                </Col>
            </Row>
        </div>
    )
}

export { Contact };

// Col
// xs: < 576 pixels. -> mobile(360-414)
// sm: ≥ 576 pixels.
// md: ≥ 768 pixels. -> tablet(768-1024)
// lg: ≥ 992 pixels. 
// xl: ≥ 1200 pixels. -> laptop(1366-1440), desktop(1440-1920)

// https://web3forms.com/