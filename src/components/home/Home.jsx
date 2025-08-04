import "/src/App.css";
import "./Home.css";
import { Col, Container, Row, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section
            id="home"
            className="home-section d-flex align-items-center justify-content-center"
        >
            <Container>
                <Row
                    className="justify-content-center align-items-center g-5"
                    style={{ minHeight: "100vh" }}
                >
                    {/* Left Side - Text */}
                    <Col
                        md={6}
                        className="text-center text-md-start d-flex flex-column justify-content-center"
                    >
                        <p className="fs-5 text-muted mb-1">Hello! I’m</p>
                        <h1 className="fw-bold display-4 txt">Madhumathi</h1>
                        <div className="home-underline mb-3"></div>

                        <p className="fs-4  mb-3">
                            A passionate <strong>MERN Stack Developer</strong> focused on building elegant and efficient web applications.
                        </p>

                        {/* Tech Tags */}
                        {/* <div className="mb-4">
              <Badge bg="light" text="dark" className="me-2 mb-2 shadow-sm">React</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 shadow-sm">Node.js</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 shadow-sm">MongoDB</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 shadow-sm">Express</Badge>
            </div> */}

                        {/* Resume Buttons */}
                        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mb-3">
                            <a href="#resume" className="btn btn-outline-secondary btn-customResume shadow-sm">
                                View Resume
                            </a>

                            <a
                                href="/MadhumathiU_June25.pdf"
                                download
                                className="btn btn-outline-primary btn-customResume shadow-sm"
                            >
                                Download Resume
                            </a>
                        </div>

                        <p className="lead text-muted mt-3">
                            Let’s build something amazing together.
                        </p>
                    </Col>

                    {/* Right Side - Image */}
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src="/homeImg.jpg"
                            alt="Coding Animation"
                            className="img-fluid rounded-4 shadow-lg home-gif"
                            style={{ maxWidth: "420px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;
