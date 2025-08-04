import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <header className="sticky-top shadow-sm">
            <Navbar expand="lg" className="custom-navbar py-3">
                <Container>
                    <Navbar.Brand href="#home" className="brand-title">
                        <h2 className="m-0">Portfolio</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="text-center">
                            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                            <Nav.Link href="#about" className="nav-link-custom">About Me</Nav.Link>
                            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
                            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
                            <Nav.Link href="#resume" className="nav-link-custom">Resume</Nav.Link>
                            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
