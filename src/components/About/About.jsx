import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProfilePic from "../../assets/profile.JPEG";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className="bg-dark text-light">
      <Container className="py-5">
        <Row className="align-items-center justify-content-around">
          <Col sm={8} md={8} lg={5}>
            <LazyLoadImage src={ProfilePic} alt="Michael Profile" effect="blur" width="100%" className={styles.profilePic} />
          </Col>
          <Col lg={6} className="d-flex flex-column justify-content-center pt-5 pt-sm-0">
            <h1 className={`${styles.aboutTitle} pt-5 pt-lg-0 pb-5`}>Who am I?</h1>
            <p className="lh-lg">
              A creative professional with a strong analytical prowess and problem-solving capacity is interested in growing his skills and knowledge
              through collaboration with both internal and external stakeholders to effectively plan, create, develop, and launch products.
            </p>
            <p className="lh-lg">
              Currently enrolled in Nucamp full stack boot camp and working as a front end developer intern with Biscuits N Groovy.
            </p>
            <p className="lh-lg">
              Some interests of mine are gaming (video/board), music, fitness, photography, cooking, and dance. Always open to learning and exploring
              new things!
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
