import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Frontend Developer with a gamer-tech mindset, focused on turning ideas 
              into fast, clean, and intuitive user interfaces. Coming from the esports world, 
              I’ve learned to think under pressure, optimize every detail, and build solutions 
              that respond with precision and zero friction.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, and modern web development practices{" "}
                </b>
              </i>
              and I’m currently completing a Technical Degree in Application Development (TUDAI), 
              where I strengthened my foundations in architecture, problem-solving, and 
              performance-driven code.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  UI/UX development, responsive design, component-driven interfaces, 
                  and optimized user flows{" "}
                </b>
              </i>
              while continuously expanding my stack with new tools and best practices.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
