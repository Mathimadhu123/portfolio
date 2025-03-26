import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <section className="d-flex py-5 justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Container>
                <Row className="align-items-center ">
                    {/* Image Column */}
                    <Col md={4} className="text-center">
                        <img 
                            src="src/assets/me.png" 
                            alt="Loading..." 
                            className="img-fluid" 
                            style={{ width: "380px", height: "auto" }} 
                        />
                    </Col>

                    {/* Text Column */}
                    <Col md={8} className="text-md-start">
                        <h2>About Me</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
                            Hi, I’m Madhumathi – an aspiring <b>MERN Stack Developer</b> driven by a passion for technology and solving real-world problems. I specialize in building dynamic and responsive web applications using <b>JavaScript, React, Node.js, and MongoDB.</b>
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
                            With hands-on experience in full-stack development, I’ve worked on projects ranging from interactive <b>quiz applications</b> to visually stunning websites. I am always learning, constantly exploring new frameworks, and pushing the limits of my creativity.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
                            In addition to coding, I enjoy sharing my knowledge through teaching and mentoring others. I believe in creating beautiful, intuitive user experiences and thrive on bringing ideas to life.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
                            Let’s collaborate and build something amazing together!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
