// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import './Contact.css';

// const Contact = () => {
//     return (
//         <section className="d-flex align-items-center justify-content-center vh-100">
//             <Container>
//                 <Row className="text-center mb-4">
//                     <Col>
//                         <h2>Contact Me</h2>
//                     </Col>
//                 </Row>
//                 <Row className="text-center mb-3">
//                     <Col>
//                         <p>Need a MERN Stack Developer to bring your idea to life? I’m available for freelance, collaboration, or full-time opportunities.</p>
//                     </Col>
//                 </Row>
//                 <Row className="text-center text-justify">
//                     <Col>
//                         <p>📩 Email: madhumathi1310@gmail.com</p>
//                         <p>🌍 Website: [Your Portfolio]</p>
//                         <p>🖥 GitHub: <a href='https://github.com/Mathimadhu123/' target='_blank'> GitHub</a></p>
//                         <p>💼 LinkedIn: <a href='https://www.linkedin.com/in/madhumathi-p-930a261ba/' target='_blank'>LinkedIn</a></p>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default Contact;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaGlobe, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section d-flex align-items-center justify-content-center vh-100">
      <Container className="text-center">
        {/* Heading */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold contact-title">Contact Me</h2>
            <div className="underline"></div>
          </Col>
        </Row>

        {/* Tagline */}
        <Row className="mb-4">
          <Col md={8} className="mx-auto">
            <p className="fs-5 text-muted">
              Need a MERN Stack Developer to bring your idea to life? I’m open to freelance work, collaborations, or full-time roles.
            </p>
          </Col>
        </Row>

        {/* Contact Card */}
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="contact-card p-4 shadow-sm rounded-4 bg-white bg-opacity-75">
              <p className="mb-3">
                <FaEnvelope className="me-2 text-primary" />
                <strong>Email:</strong> <a href="mailto:madhumathi0630@gmail.com" className="text-dark text-decoration-none">madhumathi0630@gmail.com</a>
              </p>
              <p className="mb-3">
                <FaGlobe className="me-2 text-success" />
                <strong>Website:</strong> <a href="#" className="text-dark text-decoration-none">[Your Portfolio]</a>
              </p>
              <p className="mb-3">
                <FaGithub className="me-2 text-dark" />
                <strong>GitHub:</strong> <a href="https://github.com/Mathimadhu123/" target="_blank" rel="noreferrer" className="text-dark text-decoration-none">GitHub</a>
              </p>
              <p className="mb-0">
                <FaLinkedin className="me-2 text-info" />
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/madhumathi-p-930a261ba/" target="_blank" rel="noreferrer" className="text-dark text-decoration-none">LinkedIn</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
