import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
    return (
        <div className='fixNav'>
            <Navbar expand="lg" className="bg-body-tertiary p-2  ">
                <Container>
                    <Navbar.Brand href="#home" ><h2 className='text-secondary'>Portfolio</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className='fw-bold' >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About Me</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Nav.Link href="#link">Skills</Nav.Link>
                            <Nav.Link href="#link">Resume</Nav.Link>
                            <Nav.Link href="#link">Contact Me</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
