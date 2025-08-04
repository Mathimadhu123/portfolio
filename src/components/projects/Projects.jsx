import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./projects.css";

const projects = [
  {
    title: "Job Portal",
    description: "A MERN stack job portal for recruiters and job seekers.",
    technologies: "React, Node.js, Express, MongoDB, Bootstrap",
    image: "/portfolioThumb.png",
    github: "https://github.com/Mathimadhu123/pathFinder_BE",
    live: "https://6857bd9944dae397f8f53cbd--pathfinderjob.netlify.app/",
  },
  {
    title: "Quiz Application",
    description: "A full-stack quiz application with authentication and scoring.",
    technologies: "React, Redux, Node.js, MongoDB, Bootstrap",
    image: "quizzThumb.png",
    github: "https://github.com/Mathimadhu123/quizzFrontend",
    live: "https://heroic-daffodil-62b2a1.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    technologies: "React, Vite, JavaScript, Bootstrap, CSS",
    image: "port.png",
    github: "",
    live: "",
  },
];

const ProjectList = () => {
  return (
    <section id="projects" className="projects-section py-5" style={{ background: "linear-gradient(135deg, #e3f2fd, #f1f8e9)" }}>
      <Container>
        <h2 className="project-title">My Projects</h2>
<div className="project-underline"></div>
     
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="project-card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={`${project.title} Thumbnail`}
                  className="project-img"
                />
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-semibold fs-5">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">{project.description}</Card.Text>

                  <div className="mb-2">
                    <small className="text-secondary">
                      <strong>Technologies:</strong> {project.technologies}
                    </small>
                  </div>

                  <div className="mt-auto d-flex flex-wrap gap-2">
                    {project.github && (
                      <Button
                        variant="outline-dark"
                        size="sm"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub Repo"
                      >
                        <FaGithub className="me-1" />
                        GitHub
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Live
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectList;
