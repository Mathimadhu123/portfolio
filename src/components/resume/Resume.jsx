import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "./Resume.css";

function Resume() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section id="resume" className="resume-section d-flex align-items-center justify-content-center">
      <Container className="text-center">
        <h2 className="fw-bold mb-4 resume-title  ">My Resume</h2>
        <div className="resume-underline"></div>
        <div className="resume-frame mx-auto mb-4">
          <iframe
            src="/MadhumathiU_June25.pdf#toolbar=0"
            title="Resume PDF"
            width="100%"
            height="600px"
            style={{ border: "none", borderRadius: "12px" }}
          ></iframe>
        </div>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a
            href="/MadhumathiU_June25.pdf"
            download="Madhumathi_Resume.pdf"
            className="btn btn-outline-success"
          >
            Download Resume
          </a>
          {/* <Button variant="outline-secondary" onClick={handleBack}>
            Back to Home
          </Button> */}
        </div>
      </Container>
    </section>
  );
}

export default Resume;
