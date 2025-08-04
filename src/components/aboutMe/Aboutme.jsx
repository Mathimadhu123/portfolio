import { Container, Row, Col, Button } from "react-bootstrap";
import "./aboutme.css";

function About() {
  return (
    <section id="about" className="about-section py-5 d-flex align-items-center">
      <Container>
        <Row className="align-items-center g-5">
          {/* Image */}
          <Col md={5} className="text-center">
            <img
              src="me.png"
              alt="Madhumathi"
              className="img-fluid rounded-4 shadow about-img"
              style={{ maxWidth: "420px" }}
            />
          </Col>

          {/* Text */}
          <Col md={7}>
          

            <p className="about-paragraph mb-3">
              A passionate <strong>MERN Stack Developer</strong> who turns ideas into interactive, scalable, and meaningful digital experiences.
            </p>
            <p className="about-paragraph mb-3">
              I specialize in modern web development using <strong>React, Node.js, Express</strong>, and <strong>MongoDB</strong>. From intuitive UIs to clean backend logic, I enjoy crafting full-stack applications that solve real problems.
            </p>
            <p className="about-paragraph mb-3">
              I've built <strong>Quiz Applications</strong> and <strong>Job Portals</strong> with a focus on functionality, responsiveness, and user experience.
            </p>
            <p className="about-paragraph mb-3">
              I also enjoy <strong>mentoring others</strong> and working with tools like <strong>Figma, Canva</strong>, and <strong>Photoshop</strong> to create engaging UI/UX designs.
            </p>
            <p className="about-paragraph">
              Always curious. Always building. Let’s create something awesome together!
            </p>

            <Button href="#contact" variant="outline-primary" className="mt-4 shadow-sm">
              Let’s Connect
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
