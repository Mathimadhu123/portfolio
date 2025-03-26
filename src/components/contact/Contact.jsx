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
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section d-flex align-items-center justify-content-center vh-100">
           <Container className="text-center">
        {/* Title */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold">Contact Me</h2>
          </Col>
        </Row>

        {/* Description */}
        <Row className="mb-3">
          <Col md={8} className="mx-auto">
            <p className="fs-5">
              Need a MERN Stack Developer to bring your idea to life? I’m available for freelance, collaboration, or full-time opportunities.
            </p>
          </Col>
        </Row>

        {/* Contact Info */}
        <Row className="justify-content-center">
          <Col md={6}>
            <p><strong>📩 Email:</strong> <a href="mailto:madhumathi1310@gmail.com" className="text-decoration-none">madhumathi1310@gmail.com</a></p>
            <p><strong>🌍 Website:</strong> <a href="#" className="text-decoration-none">[Your Portfolio]</a></p>
            <p><strong>🖥 GitHub:</strong> <a href="https://github.com/Mathimadhu123/" target="_blank" className="text-decoration-none">GitHub</a></p>
            <p><strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/madhumathi-p-930a261ba/" target="_blank" className="text-decoration-none">LinkedIn</a></p>
          </Col>
        </Row>
      </Container>


        </section>
    );
};

export default Contact;
