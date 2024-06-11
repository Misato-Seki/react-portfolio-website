import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo_cat.svg';
import LinkedIn from '../assets/linkedin.svg';
import GitHub from '../assets/github.svg';
import { HashLink } from 'react-router-hash-link';


function NavBar() {
    return (
        <Navbar expand="md" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} className="d-inline-block align-top" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><img src={LinkedIn} alt="linkedin-logo" /></a>
                    <a href='#'><img src={GitHub} alt="github-logo" /></a>
                </div>
                {/* <HashLink to="#contact"><button className='connectButton'><span>Contact me</span></button></HashLink> */}
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export { NavBar };