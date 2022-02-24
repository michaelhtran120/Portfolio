// React & Library imports
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ScrollAnimation from "react-animate-on-scroll";

// Asset imports
import ProfilePic from "../../assets/profile.JPEG";

// Style imports
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={`bg-dark text-light ${styles["about"]}`}>
      <Container className="py-5">
        <Row className="align-items-center justify-content-around">
          <Col xs={11} sm={8} md={8} lg={5}>
            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" duration={1}>
              <LazyLoadImage src={ProfilePic} alt="Michael Profile" effect="blur" width="100%" className={styles.profilePic} />
            </ScrollAnimation>
          </Col>
          <Col lg={6} className="d-flex flex-column justify-content-center pt-5 pt-sm-0">
            <ScrollAnimation animateIn="fadeInDown" animateOut="fadeOutDown" duration={1.5}>
              <h1 className={`${styles.aboutTitle} pt-5 pt-lg-0 pb-5`}>Who am I?</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" duration={1}>
              <p className="lh-lg">
                A creative professional with a strong analytical prowess and problem-solving capacity is interested in growing his skills and
                knowledge through collaboration with both internal and external stakeholders to effectively plan, create, develop, and launch
                products.
              </p>
              <p className="lh-lg">
                Completed Nucamp full stack boot camp in February and currently working as a front end developer intern with Biscuits N Groovy.
              </p>
              <p className="lh-lg">
                Some interests of mine are gaming (video/board), music, fitness, photography, cooking, and dance. Always open to learning and
                exploring new things!
              </p>
              <p>
                Visit my{" "}
                <a href="https://github.com/michaelhtran120" target="_blank" rel="noreferrer">
                  Github
                </a>{" "}
                to see all my projects!
              </p>
              <p className="lh-lg">
                If you would like to ask me questions about my work or just get to know me, please contact me using the form below. I will get back to
                you as soon as possible and we can set up a remote coffee meet up!
              </p>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="py-4">
        <ScrollAnimation animateIn="fadeInDown" animateOut="FadeOut" duration={1}>
          <h1 className={styles.skillTitle}>Skills / Technologies</h1>
        </ScrollAnimation>
        <Row className={`${styles.skillRow} gy-3`}>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn="fadeInLeft" duration={1}>
              <Card className={styles.skillCard}>
                <Card.Header className={styles.cardHeader}>Front-End</Card.Header>
                <Card.Body className={styles.CardBody}>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Sass / Scss</li>
                    <li>Bootstrap</li>
                    <li>Material UI (MUI)</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Redux & Redux Toolkit</li>
                  </ul>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn="fadeInRight" duration={1}>
              <Card className={styles.skillCard}>
                <Card.Header className={styles.cardHeader}>Back-End / Testing</Card.Header>
                <Card.Body className={styles.CardBody}>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                  </ul>
                  <ul>
                    <li>React Testing Library</li>
                    <li>Jest</li>
                  </ul>
                </Card.Body>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" duration={1}>
              <Card className={styles.skillCard}>
                <Card.Header className={styles.cardHeader}>Other Technologies</Card.Header>
                <Card.Body className={styles.CardBody}>
                  <ul>
                    <li>Git / Github</li>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Asana</li>
                    <li>Trello</li>
                    <li>Notion</li>
                  </ul>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row className={`${styles.skillRow} gy-3 justify-content-center`}>
          <Col xs={12} md={6}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
