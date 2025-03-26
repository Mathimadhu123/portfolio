import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiFigma, SiCanva, SiGithub,SiAdobephotoshop, SiExpress } from "react-icons/si";
import './Skills.css';

function Skills() {
    return (
        <section className="skills-section py-5" id="skills" style={{minHeight:"100vh"}}>
            <Container >
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="section-title">Skills</h2>
                    </Col>
                </Row>

                <Row className="skill-icons-container">
                    {/* Skills with no background or card structure */}
                    <Col md={3} className="skill-item">
                        <FaHtml5 size={60} className="html-icon" />
                        <p className="skill-name">HTML5</p>
                    </Col>

                    <Col md={3} className="skill-item">
                        <FaCss3Alt size={60} className="css-icon" />
                        <p className="skill-name">CSS3</p>
                    </Col>

                    <Col md={3} className="skill-item">
                        <FaReact size={60} className="react-icon" />
                        <p className="skill-name">React.js</p>
                    </Col>

                    <Col md={3} className="skill-item">
                        <FaNodeJs size={60} className="node-icon" />
                        <p className="skill-name">Node.js</p>
                    </Col>
                    <Col md={3} className="skill-item">
                     <SiExpress size={60} />
                     <p className="skill-name"> Express.Js</p>
                    </Col>

                    <Col md={3} className="skill-item">
                        <FaGitAlt size={60} className="git-icon" />
                        <p className="skill-name">Git</p>
                    </Col>

                    <Col md={3} className="skill-item">
                        <SiFigma size={60} className="figma-icon" />
                        <p className="skill-name">Figma</p>
                    </Col>

                    <Col md={3} className="skill-item">
                        <SiCanva size={60} className="canva-icon" />
                        <p className="skill-name">Canva</p>
                    </Col>

                    <Col md={3} className="skill-item">
                        <SiGithub size={60} className="github-icon" />
                        <p className="skill-name">GitHub</p>
                    </Col>
                    <Col md={3} className="skill-item">
                        <SiAdobephotoshop size={60} className="adobephotoshop-icon"/>
                        <p className="skill-name">Adobe Photoshop</p>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
