import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/img/logo-cat.svg';
import LinkedIn from '../assets/img/linkedin.svg';
import GitHub from '../assets/img/github.svg';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Default.css';
import '../css/NavBar.css';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onClick = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onClick);
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', onClick);
    },[])
    return (
        <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} className="d-inline-block align-top" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/misato-seki-198a16251/'><img src={LinkedIn} alt="linkedin-logo" /></a>
                    <a href='https://github.com/Misato-Seki'><img src={GitHub} alt="github-logo" /></a>
                </div>
                <HashLink to='#contact'>
                  <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </HashLink>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export { NavBar };