import "/src/App.css";
import "./Home.css";
import { Col, Container, Row } from 'react-bootstrap'
function Home() {
    return (
        <div className="body" >
            <Container>
                <Row className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <Col className="d-flex justify-content-center align-items-center text-center">
                        <div>
                            <div>
                                <h1 className="fw-bold fontSize">Madhumathi</h1>
                                <p className="fs-3">Aspiring MERN Stack Developer</p>
                                <button type="button" class="btn btn-primary me-3 btn-custom">About Me</button>
                                <button type="button" class="btn btn-outline-secondary btn-customResume">Resume</button>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center text-center">
                        <div>

                            <img src="/about.gif"  alt="Loading..." className="align-items-center img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}
export default Home;