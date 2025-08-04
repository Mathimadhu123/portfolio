import { Container, Row, Col } from "react-bootstrap";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiFigma,
    SiCanva,
    SiGithub,
    SiAdobephotoshop,
    SiExpress,
} from "react-icons/si";
import React from "react";
import "./Skills.css";

const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "#e44d26" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
    { icon: <FaReact />, name: "React.js", color: "#61DBFB" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#3C873A" },
    { icon: <SiExpress />, name: "Express.js", color: "#000000" },
    { icon: <FaGitAlt />, name: "Git", color: "#F1502F" },
    { icon: <SiFigma />, name: "Figma", color: "#a259ff" },
    { icon: <SiCanva />, name: "Canva", color: "#00c4cc" },
    { icon: <SiGithub />, name: "GitHub", color: "#171515" },
    { icon: <SiAdobephotoshop />, name: "Photoshop", color: "#31A8FF" },
];

function Skills() {
    return (
        <section className="skills-section py-5" id="skills">
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="skills-title">My Skills</h2>
                        <div className="skills-underline"></div>

                    </Col>
                </Row>

                <Row className="g-4 justify-content-center">
                    {skills.map((skill, idx) => (
                        <Col
                            xs={6}
                            md={4}
                            lg={3}
                            key={idx}
                            className="d-flex justify-content-center"
                        >
                            <div className="skill-card text-center p-4">
                                <div
                                    className="skill-icon mb-3"
                                    style={{ color: skill.color }}
                                >
                                    {React.cloneElement(skill.icon, { size: 50 })}
                                </div>
                                <p className="skill-name">{skill.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
